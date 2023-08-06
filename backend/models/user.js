const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname : {
        required: true,
        type: String,
        trim : true,
        validate: {
            validator: (value) => {
              const re =
              /^[a-zA-Z]+ [a-zA-Z]+$/;
              return value.match(re);
            },
            message: "Please enter a valid full name name(first name & last name)",
        },
    },

    email: {
        required: true,
        type: String,
        trim: true,
        validate: {
          validator: (value) => {
            const re =
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return value.match(re);
          },
          message: "Please enter a valid email address",
        },
    },

    password: {
        required: true,
        type: String,
        trim : true,
    },
    type : {
      type : String,
      default : 'user'
    },
    bloodgroup:{
        //required: true,
        type: String,
    },
    gender :{
        //required: true,
        type: String,
    },
    donation_date : [{
      name : {
          type : String  
      },
      date: {
          type: Date
      },
  },],
    dateOfBirth: {
        type: Date,
       // required: true,
        trim: true,
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;