const express = require("express");
const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");
const LocalStorage = require('node-localStorage').LocalStorage;
var localStorage = new LocalStorage('./scratch');
//const auth = require("../middlewares/auth");


const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: process.env.EMAILID,
    pass: process.env.EMAILPASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});


authRouter.post("/api/signup", async (req, res) => {
  try {
    const { fullname, email, password , bloodgroup,gender,dateOfBirth,city} = req.body;
  //   if(!(fullname && email && password && bloodgroup && gender && dateOfBirth && city )){
  //     return res
  //     .status(400)
  //     .json({ error: "All field must be required"});
  // }
//   if(!(labname && email && address && mobile_no && landmark && city && pincode && open_time && component_aviable && license && issued_date)){
//     return res
//     .status(400)
//     .json({ msg: "All field must be required"});
// }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ msg: "User with same email already exists!" });
    }

    const hashedPassword = await bcryptjs.hash(password, 8);
    //req.body.password = hashedPassword;
    let user = new User(
      req.body
    );
    user.password = hashedPassword;
    user = await user.save(user.password = hashedPassword);
    res.json(user);

    let HelperOptions = {

      from: process.env.NAME + '<' + (process.env.EMAILID) + '>',
      to: user.email,
      subject: "Welcome to Dwarkadhish Bloodbank",
      text: "Hello " + fullname + "," + "\n" + "your use name and password for login is mention in the below." + "\n" + "UserName : " + email + "\n" + "Password : " + password
    };

    transporter.sendMail(HelperOptions, (err, info) => {
      if (err) throw err;
      console.log("The message was sent");
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});




authRouter.post("/api/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!(email && password  )){
      return res
      .status(400)
      .json({ msg: "All field must be required"});
  }
    const user = await User.findOne({ email });
    if(user){
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials." });
    }

    const token = jwt.sign({ id: user._id, type: user.type }, process.env.JWT_SECRET);
    res.cookie('t', token, { expire: new Date() + 9999 })

    // return response with user and send to client
    const { _id, name, email, type } = user;
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    return res.json({ token, user: { _id, name, email, type } });

  }
  else{
    return res
        .status(400)
        .json({ msg: "User with this email does not exist!" });
  }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

authRouter.post('/api/logout', async (req, res) => {
  localStorage.removeItem('token');
  localStorage.removeItem('email')
  res.json({ msg: "You have successfully logged out" });
})

// get user data
authRouter.get("/", async (req, res) => {
  const user = await User.findById(req.user);
  res.json({ ...user._doc, token: req.token });
});
module.exports = authRouter;