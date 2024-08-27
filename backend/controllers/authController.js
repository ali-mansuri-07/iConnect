const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student = require('../models/Student');
const Alumni = require('../models/Alumni');
const Admin = require('../models/Admin');

exports.register = async (req, res) => {
    const { name, email, password, role, college, company, job, skills, specializations } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        let user;
        if (role === 'student') {
            user = new Student({
                name,
                email,
                password: hashedPassword,
                college,
                branch
            });
        } else if (role === 'alumni') {
            user = new Alumni({
                name,
                email,
                password: hashedPassword,
                college,
                company,
                job,
                skills: skills.split(',').map(skill => skill.trim()), // Convert comma-separated skills into an array
                specializations: specializations.split(',').map(spec => spec.trim()) // Convert comma-separated specializations into an array
            });
        }

        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    let user;
    if (role === 'student') {
      user = await Student.findOne({ email });
    } else if (role === 'alumni') {
      user = await Alumni.findOne({ email });
    } else if (role === 'admin') {
      user = await Admin.findOne({ email });
    }
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
