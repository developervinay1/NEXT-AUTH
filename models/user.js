import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
}, {timestamps: true});

const User = mongoose.User || mongoose.model("Users", userSchema);

export default User;