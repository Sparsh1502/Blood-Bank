const jwt = require("jsonwebtoken");
const LocalStorage = require('node-localStorage').LocalStorage;
var localStorage = new LocalStorage('./scratch');
const auth = async (req, res, next) => {
  try {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    //localStorage.removeItem("token");
    // console.log(email);
    if (!token)
      return res.status(401).json({ msg: "No auth token, access denied" });

    const verified = jwt.verify(token, "passwordKey");
   // console.log(verified);
    if (!verified)
      return res
        .status(401)
        .json({ msg: "Token verification failed, authorization denied." });

    req.user = verified;
    req.email = email;
   // console.log(verified);
   // req.token = token;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = auth;