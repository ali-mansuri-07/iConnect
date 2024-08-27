const express = require('express');
const { getStudentProfile, updateStudentProfile } = require('../controllers/studentController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Get student profile
router.get('/profile', authMiddleware, getStudentProfile);

// Update student profile
router.put('/profile', authMiddleware, updateStudentProfile);

module.exports = router;
