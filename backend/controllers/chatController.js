const Chat = require('../models/Chat');

exports.getChat = async (req, res) => {
  const { chatId } = req.params;
  try {
    const chat = await Chat.findById(chatId);
    res.json(chat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.sendMessage = async (req, res) => {
  const { chatId } = req.params;
  const { sender, text } = req.body;
  try {
    const chat = await Chat.findById(chatId);
    chat.messages.push({ sender, text, timestamp: new Date() });
    await chat.save();
    res.status(201).json(chat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
