const mongoose = require('mongoose');

const connectDB = async(req,res) => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo Connection Successful");
    } catch (error) {
        console.log("MongoDB Connection failed ");
        throw new Error
    }
}

module.exports = connectDB;