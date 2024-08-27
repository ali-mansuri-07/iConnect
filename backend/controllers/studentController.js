const Student = require('../models/Student');

exports.getStudentProfile = async (req, res) => {
  try {
    const student = await Student.findById(req.user.id).select('-password');
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateStudentProfile = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.user.id, req.body, { new: true }).select('-password');
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
