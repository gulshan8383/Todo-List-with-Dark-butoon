const mongoose = require("mongoose");
require("dotenv").config();

exports.connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(() =>
        console.log("db connection is successfully connected")
    )
    .catch((error) => {
        console.log("db connection is failed");
        console.error(error);
        process.exit(1);
    })

};