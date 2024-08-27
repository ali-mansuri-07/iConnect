const express = require('express');
const { addCollege, getAllColleges } = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Add new college
router.post('/college', authMiddleware, addCollege);

// Get all colleges
router.get('/colleges', authMiddleware, getAllColleges);

module.exports = router;
