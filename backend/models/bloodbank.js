
const mongoose = require('mongoose');
//const {bloodgroupSchema} = require('./bloodgroup');
const bloodbankSchema = new mongoose.Schema({
    labname : {
        required : true,
        type : String,
        trim : true
    },
    blood_group : [
        {
            name : {
                type : String,
                required : true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
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
    donator :[mongoose.Schema.Types.ObjectId],
    receiver : [mongoose.Schema.Types.ObjectId],
    landmark : {
        type : String,
        trim : true
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

    component_aviable : {
        // required : true,
        type : String,
        trim : true
    },

    license : {
        // required : true,
        type : String,
        trim : true
    },

    issued_date : {
        // required : true,
        type : Date
    }
})

const Bloodbank = mongoose.model("Bloodbank", bloodbankSchema);
module.exports = Bloodbank;


