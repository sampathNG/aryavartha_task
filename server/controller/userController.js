const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const User = require("../db/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const createUser = async (req, res) => {
  const {
    personalInfo: { firstName, lastName, phoneNumber, email, password, role },
    billingAddress: { companyName, street, street2, city, state, zip, country },
  } = req.body;
  // if (!firstName || !lastName || !email || !password || !phoneNumber) {
  //   return res
  //     .status(400)
  //     .json({ message: "All personalInfo fields are required." });
  // }
  // if (!street || !city || !state || !zip || !country) {
  //   return res
  //     .status(400)
  //     .json({ message: "All billingAddress fields are required." });
  // }
  try {
    // const duplicate = await User.findOne({ "personalInfo.email": email });
    // if (duplicate) {
    //   return res.status(409).json({ message: "User already exists." });
    // }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      personalInfo: {
        firstName,
        lastName,
        phoneNumber,
        email,
        password: hashedPassword,
        role: role || "user",
      },
      billingAddress: {
        companyName,
        street,
        street2,
        city,
        state,
        zip,
        country,
      },
    });
    const savedUser = await newUser.save();
    console.log("user created");
    res.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userr = await User.findOne({ email });
    if (userr) {
      const validity = await bcrypt.compare(password, userr.password);
      if (validity) {
        const token = jwt.sign(
          { user_id: User._id, role: userr.role },
          process.env.JWT_SECRET,
          {
            expiresIn: "48h",
          }
        );
        console.log(token);
        res.status(200).json({ User, token });
      } else {
        res.status(401).json("Wrong Password");
      }
    } else {
      res.status(401).json("User Not Found");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const userr = await User.findById(id);
    res.status(200).json(userr);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const updateUser = async (req, res) => {
  const id = req.params.id;
  const {
    personalInfo: { firstName, lastName, phoneNumber, email, password, role },
    billingAddress: { companyName, street, street2, city, state, zip, country },
  } = req.body;
  try {
    let hashedPassword;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(password, salt);
    }
    // Construct the updated user object
    const updatedUser = {
      personalInfo: {
        firstName,
        lastName,
        phoneNumber,
        email,
        password: hashedPassword || undefined, // Use existing password if not updated
        role,
      },
      billingAddress: {
        companyName,
        street,
        street2,
        city,
        state,
        zip,
        country,
      },
    };
    Object.keys(updatedUser.personalInfo).forEach(
      (key) =>
        updatedUser.personalInfo[key] === undefined &&
        delete updatedUser.personalInfo[key]
    );
    Object.keys(updatedUser.billingAddress).forEach(
      (key) =>
        updatedUser.billingAddress[key] === undefined &&
        delete updatedUser.billingAddress[key]
    );
    const user = await User.findByIdAndUpdate(id, updatedUser, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    // const userds = await User.findByIdAndDelete(id);
    const userds = await User.deleteMany();
    res.status(200).json(userds);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
// forgetPassword
const forgotPasswords = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ "personalInfo.email": email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isSamePassword = await bcrypt.compare(
      password,
      user.personalInfo.password
    );
    if (isSamePassword) {
      return res
        .status(400)
        .json({ message: "New password cannot be the same as the old one" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    user.personalInfo.password = hashedPassword;
    await user.save();
    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ "personalInfo.email": email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000;
    await user.save();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    // change after deploying
    const resetUrl = `http://localhost:5000/reset-password/${resetToken}`; // Adjust as per your frontend route
    const mailOptions = {
      to: email,
      from: process.env.EMAIL,
      subject: "Password Reset Request",
      text: `You requested a password reset. Please click on the following link or paste it in your browser:\n\n${resetUrl}\n\nIf you did not request this, please ignore this email.`,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      message: "Password reset link has been sent to your email",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const resetPassword = async (req, res) => {
  const token = req.params.token;
  const password = req.body.passsword;
  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    user.personalInfo.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();
    res.status(200).json({ message: "Password has been reset successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  forgotPasswords,
  forgotPassword,
  resetPassword,
  createUser,
  loginUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
