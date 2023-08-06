const express = require("express");
const user0Router = express.Router();
const auth = require("../middlewares/auth");
const BloodBank = require("../models/bloodbank");
const Application = require("../models/application");
const BloodBankApplication = require("../models/bloodbankapplication")
const User = require("../models/user");
var jwt = require('jsonwebtoken');


const JWT_SECRET = "passwordKey";

user0Router.get("/search/:key1/:key2", async(req,res) => {
    try{
      // console.log(req.params.key);
       let a = req.params.key2;
       if(a === 'a+'){
        a = "^(a|o)[-+]$"
       }
       else if(a === 'o+'){
        a = "^(o)[-+]$"
       }
       else if(a == 'b+'){
        a = "^(b|o)[-+]$"
       }
       else if(a === 'ab+'){
        a = "^(a|b|o)[-+]|ab[+-]$"
       }
       else if(a === 'a-'){
        a = "^(a|o)[-]$"
       }
       else if(a === 'o-'){
        a = "o-";
       }
       else if(a === "b-"){
        a = "^(a|o)[-]$"
       }
       else if(a === "ab-"){
        a === "^(a|b|o)[-]|ab[-]$";
       }

        let data = await BloodBank.find(
            {
                "$and" : [
                    {"city" : {$regex : req.params.key1}},
                   // {""}
                    {"blood_group.name" :  {$regex : a}}
                ]
            }
        )
        res.send(data);
        
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
})

user0Router.post('/user0/req-blood-sample', auth, async (req,res) => {
    try{
        const { applicationid, name, quantity} = req.body;
        console.log(quantity);
        if(!(name && quantity) ){
            return res
            .status(400)
            .json({ msg: "All field must be required"});
        }
        // const { applicationid, name, quantity} = req.body;
        const userid = req.user.id;
        console.log(applicationid);
        let app = new Application({applicationid, userid, name, quantity});
        app = await app.save();
        res.json(app);   
    }
    catch(e){
        res.status(500).json({error : e.message});
    }

})

user0Router.get("/user0/show-application/",auth,async(req,res) => {
    try{
        let app = await Application.find({userid : req.user.id}).sort({_id : -1});
        res.json(app);
    }
    catch(e){
        res.status(500).json({error : e.message});
    }
})

user0Router.get("/user0/show-profile", auth, async(req,res) => {
    try{
        let user = await User.findOne({_id : req.user.id});
        console.log(user);
        res.json(user);
    }
    catch(e){
        res.status(500).json({error : e.message});
    }
})

user0Router.get("/user0/findnumberofdonor",  async(req,res) => {
    try{
        let user = await User.find({type : "donor"});
    //    console.log(user);
        res.json(user);
    }
    catch(e){
        res.status(500).json({error : e.message});
    }
})
user0Router.post("/user0/bloodbankapp/", auth, async(req,res) => {
    try{
        const {labname, password, email, address, mobile_no,  city, pincode, open_time,  license, issued_date} = req.body;
        if(!(labname && email && address && password && mobile_no && city && pincode && open_time  && license && issued_date)){
            return res
            .status(400)
            .json({ msg: "All field must be required"});
        }
        let app = new BloodBankApplication({
            labname, 
            email, 
            password,
            address,
            mobile_no, 
            
            city, 
            pincode, 
            open_time, 
           
            license, 
            issued_date
        });
        
        const existingUser = await BloodBankApplication.findOne({ email });
            if (existingUser) {
            return res
            .status(400)
            .json({ msg: "BloodBank with same email already exists!" });
        }
        app = await app.save();
        res.json(app);
    }
    catch(e){
        res.status(500).json({error : e.message});
    }
})


module.exports = user0Router;