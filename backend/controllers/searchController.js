const Alumni = require('../models/Alumni');

exports.searchAlumni = async (req, res) => {
  const { name, skills, company, college } = req.query;
  try {
    const query = {};
    if (name) query.name = { $regex: name, $options: 'i' };
    if (skills) query.skills = { $in: skills.split(',') };
    if (company) query.company = { $regex: company, $options: 'i' };
    if (college) query.college = { $regex: college, $options: 'i' };

    const alumni = await Alumni.find(query);
    res.json(alumni);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
