const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Hasnain_Mazhar:password@cluster0.51xesc6.mongodb.net/test"

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo successfully");
    })
}

module.exports = connectToMongo;