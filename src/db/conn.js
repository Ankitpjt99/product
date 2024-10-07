


const mongoose = require('mongoose');

const uri = "mongodb+srv://Ankit:Ylr8xC2TUaOvwuwA@ankitapi.wo93h.mongodb.net/?retryWrites=true&w=majority&appName=AnkitAPI";

const connectDB = () => {
    console.log("connect to bd");
    
    return mongoose.connect(uri);
};


module.exports = connectDB;



