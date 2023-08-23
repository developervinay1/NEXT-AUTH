import mongoose, { Schema, models } from "mongoose";

const emailUserSchema = new Schema(
  {
    name: {
        type: String,
        required: true,
      },
    email: {
      type: String,
      required: true,
    },
    password: {
        type: String,
        required: true
    }    
  },
  { timestamps: true }
);

const EmailUser = models.EmailUser || mongoose.model("Email Account", emailUserSchema);
export default EmailUser;