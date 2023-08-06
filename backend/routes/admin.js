const express = require("express");
const adminRouter = express.Router();
const nodemailer = require("nodemailer");
const BloodBank = require("../models/bloodbank");
// const {Bloodgroup} = require("../models/bloodgroup");
const BloodBankApplication = require("../models/bloodbankapplication");
const User = require("../models/user");
adminRouter.post("/admin/add-bloodbank", async (req, res) => {
    try{
        const {labname, email, address, mobile_no, landmark, city, pincode, open_time, component_aviable, license, issued_date} = req.body;
        let bloodbank = new BloodBank({
            labname, 
            email, 
            address,
            mobile_no, 
            landmark, 
            city, 
            pincode, 
            open_time, 
            component_aviable, 
            license, 
            issued_date
        });
        const existingUser = await BloodBank.findOne({ email });
            if (existingUser) {
            return res
            .status(400)
            .json({ msg: "User with same email already exists!" });
        }
        bloodbank = await bloodbank.save();
        res.json(bloodbank);
    }
    catch(e){
        res.status(500).json({error : e.message});
    }
})



adminRouter.get('/admin/fetchallbloodbank', async (req,res) => {
    try{
        let bloodbank = await BloodBank.find();
        res.json(bloodbank);
    }
    catch(e){
        res.status(500).json({error : e.message});
    }
})

adminRouter.get('/admin/show-donors/', async(req,res) => {
    try{
        const user = await User.find({type : "donor"});
        res.json(user);
    }
    catch(e){
        res.status(500).json({error : e.message});
    }

})

adminRouter.get('/admin/show-receivers/', async(req,res) => {
    try{
        const donor = await User.find({type : "receiver"});
        res.json(donor);
    }
    catch(e){
        res.status(500).json({error : e.message});
    }

})
// adminRouter.post("/admin/add-bloodstock", async(req,res) => {
//     try{

//         let bloodbank = await BloodBank.findById(req.labname);
//         let name = await Bloodgroup.findById(req.)
        
//     }
//     catch(e){
//         res.status(500).json({error : e.message});
//     }
// });

adminRouter.get("/admin/show-apps/", async(req,res) => {
    try{
        const app = await BloodBankApplication.find().sort({_id : -1});;
        res.json(app);
    }
    catch(e){
        res.status(500).json({error: e.message});
    }
})
adminRouter.get("/admin/show-app/:key", async(req,res) => {
    try{
        const id = req.params.key;
        const app = await BloodBankApplication.findById(id);
        res.json(app);
    }
    catch(e){
        res.status(500).json({error: e.message});
    }
})

adminRouter.patch("/admin/accept-application/:key", async (req, res) => {
    try {
        const id = req.params.key;
        const app = await BloodBankApplication.findByIdAndUpdate(id, { $set: { "status": "Accepted" } });
        res.json(app);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
})

adminRouter.patch("/admin/reject-application/:key", async (req, res) => {
    try {
        const id = req.params.key;
        const app = await BloodBankApplication.findByIdAndUpdate(id, { $set: { "status": "Rejected" } });
        res.json(app);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
})

adminRouter.post("/admin/send-mail", async (req, res) => {
    try {
        const {message, email} = req.body;
        if(!message){
            message = `Conagratulation , \n Your Blood Bank added succesfully to the Blood Buddies Blood Bank management system. Now you can login with your details to the application.
            \n Regards, \n Blood Buddies `
        }
        // if(message)
       // const email = "bhavinsonagara2@gmail.com";
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
          let HelperOptions = {

            from: process.env.NAME + '<' + (process.env.EMAILID) + '>',
            to: email,
            subject: "Welcome to Dwarkadhish Bloodbank",
            text: message
          };
      
          transporter.sendMail(HelperOptions, (err, info) => {
            if (err) throw err;
            console.log("The message was sent");
          });
        
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
})
module.exports = adminRouter;