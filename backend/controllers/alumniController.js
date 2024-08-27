const Alumni = require('../models/Alumni');

exports.getAlumniProfile = async (req, res) => {
  try {
    const alumni = await Alumni.findById(req.user.id).select('-password');
    res.json(alumni);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAlumniProfile = async (req, res) => {
  try {
    const alumni = await Alumni.findByIdAndUpdate(req.user.id, req.body, { new: true }).select('-password');
    res.json(alumni);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
