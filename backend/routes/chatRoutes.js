const express = require('express');
const { getChat, sendMessage } = require('../controllers/chatController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Get chat messages
router.get('/:chatId', authMiddleware, getChat);

// Send a new message
router.post('/:chatId', authMiddleware, sendMessage);

module.exports = router;
