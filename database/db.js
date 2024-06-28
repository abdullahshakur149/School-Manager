const mongoose = require('mongoose');

const MONGO_URL = 'mongodb://localhost:27017/';

const connectDB = async () => {
    try {
        const con = await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;