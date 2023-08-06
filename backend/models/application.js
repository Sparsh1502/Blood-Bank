const mongoose = require('mongoose');
const applicationSchema = new mongoose.Schema({
    applicationid : {
        required : true,
        type:mongoose.Schema.Types.ObjectId,
        // ref : 'bloodbank'
    },
    userid : {
        required : true,
        type:mongoose.Types.ObjectId,
        // ref : 'User'
    },
    name : {
        type : String,
        required : true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    status : {
        type : String,
        default : 'Applied',
        required : true
    }
    
})

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;