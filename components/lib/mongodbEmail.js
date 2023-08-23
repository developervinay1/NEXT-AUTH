import mongoose from "mongoose";

export const connectMongoEmail = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI_EMAIL);
        console.log("Connected To Email Database");
    } catch (error) {
        console.log(error)
    }
}