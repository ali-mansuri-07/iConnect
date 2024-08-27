const mongoose = require('mongoose');

async function connectDB() {
    try {
        console.log("URL = "+ process.env.MONGO_URL);
        await mongoose.connect('mongodb://0.0.0.0:27017/iConnect'); 
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1); // Exit process with failure
    }
}

module.exports = connectDB;

