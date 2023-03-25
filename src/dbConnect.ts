const mongoose = require("mongoose");
import { DB_URI } from "./constants";

const dbConnect = async () => {
    try {
        await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB connected.");
    } catch (err) {
        console.log(err);
    }
};

module.exports = { dbConnect };