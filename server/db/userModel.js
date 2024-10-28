const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    personalInfo: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      email: { type: String, required: true, default: "test@gmail.com" },
      password: { type: String, required: true },
      role: { type: String, default: "user", required: true },
    },
    billingAddress: {
      companyName: { type: String },
      street: { type: String, required: true },
      street2: { type: String },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true },
      country: { type: String, required: true },
    },
    additionalInformation: {
      currency: { type: String, required: true, default: "USD" },
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Userrr", userSchema);
