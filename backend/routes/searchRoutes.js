const express = require('express');
const { searchAlumni } = require('../controllers/searchController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Search alumni
router.get('/alumni', authMiddleware, searchAlumni);

module.exports = router;
