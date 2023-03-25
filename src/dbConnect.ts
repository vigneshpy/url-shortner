
import mongoose from "mongoose";
import { DB_URI } from "./constants";

export const dbConnect = async () => {
    try {
        await mongoose.connect(DB_URI, {  });
        console.log("MongoDB connected.");
    } catch (err) {
        console.log(err);
    }
};

