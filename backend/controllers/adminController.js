const College = require('../models/College');

exports.addCollege = async (req, res) => {
  const { name, location } = req.body;
  try {
    const newCollege = new College({ name, location });
    await newCollege.save();
    res.status(201).json(newCollege);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllColleges = async (req, res) => {
  try {
    const colleges = await College.find();
    res.json(colleges);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
