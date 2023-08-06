
const mongoose = require('mongoose');
//const {bloodgroupSchema} = require('./bloodgroup');
const bloodbankapplicationSchema = new mongoose.Schema({
    labname : {
        required : true,
        type : String,
        trim : true
    },
    password: {
        required: true,
        type: String,
        trim : true,
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

    address : {
        required : true,
        type : String,
        trim : true
    },

    mobile_no :{
        required : true,
        type: Number,
        validate: {
            validator: (v) => {
                return /^[0-9]{10}$/.test(v);
            },
            message: '{VALUE} is not a valid 10 digit number!',
        },
    },
    
    city :{
        required : true,
        type : String,
        trim : true
    },

    pincode : {
        required : true,
        type : Number,
        validate: {
            validator: (v) => {
                return /^(\d{4}|\d{6})$/.test(v);
            },
            message : 'Please enter valid Pincode number!',
        }
    },

    open_time : {
        required : true,
        type : String,
        trim : true
    },

    license : {
        // required : true,
        type : String,
        trim : true
    },
    status : {
        type : String,
        default : 'Applied',
        required : true
    }, 
    issued_date : {
        required : true,
        type : Date
    }
})

const BloodbankApplication = mongoose.model("BloodBankApplication", bloodbankapplicationSchema);
module.exports = BloodbankApplication;


