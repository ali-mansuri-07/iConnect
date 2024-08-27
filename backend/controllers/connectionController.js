const ConnectionRequest = require('../models/ConnectionRequest');

exports.sendConnectionRequest = async (req, res) => {
  const { from, to } = req.body;
  try {
    const request = new ConnectionRequest({ from, to });
    await request.save();
    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.acceptConnectionRequest = async (req, res) => {
  const { requestId } = req.body;
  try {
    const request = await ConnectionRequest.findByIdAndUpdate(requestId, { status: 'accepted' });
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.rejectConnectionRequest = async (req, res) => {
  const { requestId } = req.body;
  try {
    const request = await ConnectionRequest.findByIdAndUpdate(requestId, { status: 'rejected' });
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
