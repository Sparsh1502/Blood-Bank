const express = require("express");
const app = express();
const path = require('path');
const cors = require("cors");

app.use(cors());

// Database
const mongoose = require("mongoose");
// Config Variables
require("dotenv").config();

// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const labRouter = require("./routes/lab")
const user0Router = require("./routes/user0");
// const { default: App } = require("../frontend/src/App");
//Middleware
app.use(express.static(path.join(__dirname, "js")));
app.use(express.json());

app.use(authRouter);
app.use(adminRouter);
app.use(labRouter);
app.use(user0Router);
// MongoDB Setup
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("Database Connected..."));


// Listening to the port
const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
