const express = require('express');
const { sendConnectionRequest, acceptConnectionRequest, rejectConnectionRequest } = require('../controllers/connectionController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Send connection request
router.post('/request', authMiddleware, sendConnectionRequest);

// Accept connection request
router.post('/accept', authMiddleware, acceptConnectionRequest);

// Reject connection request
router.post('/reject', authMiddleware, rejectConnectionRequest);

module.exports = router;
