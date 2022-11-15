const mongoose = require("mongoose")

const connectDatabase = async () => {
    const conn = await mongoose.connect("mongodb://localhost:27017/newdb")
    console.log("fffffffff")
}


module.exports = connectDatabase;