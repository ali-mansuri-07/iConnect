const express = require('express');
const { getAlumniProfile, updateAlumniProfile } = require('../controllers/alumniController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Get alumni profile
router.get('/profile', authMiddleware, getAlumniProfile);

// Update alumni profile
router.put('/profile', authMiddleware, updateAlumniProfile);

module.exports = router;
