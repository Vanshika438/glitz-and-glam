import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: Number},
  message: { type: String, required: true },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Contact", ContactSchema);
