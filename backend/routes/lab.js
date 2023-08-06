const express = require("express");
const labRouter = express.Router();
const auth = require("../middlewares/auth");
const BloodBank = require("../models/bloodbank");
const Application = require("../models/application");
const User = require("../models/user");
var jwt = require('jsonwebtoken');
const bcryptjs = require("bcryptjs");
var ObjectId = require('mongoose').Types.ObjectId;
const JWT_SECRET = "passwordKey";

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

labRouter.post("/lab/add-bloodsample/", auth, async (req, res) => {
    try {
        let { email, name, quantity } = req.body;
        let name1 = req.email;
        quantity = Number(quantity);
        let bloodbank = await BloodBank.findOne({ email: name1 });
        if (bloodbank.blood_group.length == 0) {
            bloodbank.blood_group.push({ name: name, quantity: quantity });
            
        }
        else {
            let isfound = false;
            for (let i = 0; i < bloodbank.blood_group.length; i++) {
                let str1 = bloodbank.blood_group[i]['name'];
                if (str1 === name) {
                    isfound = true;
                }
            }
            
            if (isfound) {
                let blood_groupss = bloodbank.blood_group.find((blood_groups) =>
                    blood_groups['name'] === name
                );
                blood_groupss.quantity += quantity;
            }
            else {
                bloodbank.blood_group.push({ name: name, quantity: quantity });
            }
        }
        bloodbank = await bloodbank.save();
        res.json(bloodbank);
    }


    catch (e) {
        res.status(500).json({ error: e.message });
    }

})

labRouter.post("/lab/decrease-bloodsample/", auth, async (req, res) => {
    try {
        let { email, name, quantity } = req.body;
        let name1 = req.email;
        quantity = Number(quantity);
        let bloodbank = await BloodBank.findOne({ email: name1 });
        if (bloodbank.blood_group.length == 0) {
            bloodbank.blood_group.push({ name: name, quantity: quantity });
            
        }
        else {
            let isfound = false;
            for (let i = 0; i < bloodbank.blood_group.length; i++) {
                let str1 = bloodbank.blood_group[i]['name'];
                if (str1 === name) {
                    isfound = true;
                }
            }
            
            if (isfound) {
                let blood_groupss = bloodbank.blood_group.find((blood_groups) =>
                    blood_groups['name'] === name
                );
                blood_groupss.quantity -= quantity;
            }
            else {
                bloodbank.blood_group.push({ name: name, quantity: quantity });
            }
        }
        bloodbank = await bloodbank.save();
        res.json(bloodbank);
    }


    catch (e) {
        res.status(500).json({ error: e.message });
    }

})
labRouter.get("/lab/show-application/", auth, async (req, res) => {
    try {
        let bloodbank = await BloodBank.findOne({ email: req.email });
        let app = await Application.find({ applicationid: bloodbank._id }).sort({_id : -1});
        res.json(app);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
})

labRouter.patch("/lab/accept-application/:key", auth, async (req, res) => {
    try {
        let id = req.params.key;
        let app = await Application.findById(id);
        let bloodbank = await BloodBank.findOne({ email: req.email });
        let isfound = false;
        for (let i = 0; i < bloodbank.blood_group.length; i++) {
            let str1 = bloodbank.blood_group[i]['name'];
            if (str1 === app.name) {
                isfound = true;
            }
        }
        if (isfound) {
            let blood_groupss = bloodbank.blood_group.find((blood_groups) =>
                blood_groups['name'] === app.name
            );
            if (blood_groupss.quantity >= app.quantity) {
                blood_groupss.quantity -= app.quantity;
                bloodbank.receiver.push(app.userid);
                bloodbank = await bloodbank.save();
                let app2 = await Application.findByIdAndUpdate(id, { $set: { "status": "Accepted" } });
                res.json(app2);
                let user = await User.findByIdAndUpdate(app.userid, { $set: { "type": "receiver" } });
                // console.log(app.userid);
                try {

                }
                catch (e) {
                    res.status(500).json({ error: e.message });
                }
            }
            else {
                console.log('hey1');
                let app1 = await Application.findByIdAndUpdate(id, { $set: { "status": "Rejected" } });
                res.json(app1);
            }

        }
        else {
            console.log('hey');
            let app1 = await Application.findByIdAndUpdate(id, { $set: { "status": "Rejected" } });
            res.json(app1);
        }


    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
})

labRouter.patch("/lab/reject-application/:key", auth, async (req, res) => {
    try {
        const id = req.params.key;
        const app = await Application.findByIdAndUpdate(id, { $set: { "status": "Rejected" } });
        res.json(app);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
})

labRouter.get("/lab/show-profile", auth, async (req, res) => {
    try {
        let bloodbank = await BloodBank.findOne({ email: req.email });
        res.json(bloodbank);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
})

labRouter.get("/lab/show-donor/", auth, async (req, res) => {
    try {
        let bloodbank = await BloodBank.findOne({ email: req.email });
        let donator = bloodbank.donator;
        let donar = donator.filter((c, index) => {
            return donator.indexOf(c) === index;
        });
        // let donor = [...new Set(receiver)];
        let data = [];
        //await User.findOne({ email })
        for (let i = 0; i < donar.length; i++) {
            let user = await User.findById(donar[i]);
            console.log(user)
            data.push(user);
        }
        // console.log(donar[0]);
        res.json(data);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
})

labRouter.get("/lab/show-receiver/", auth, async (req, res) => {
    try {
        let bloodbank = await BloodBank.findOne({ email: req.email });
        let receiver = bloodbank.receiver;
        let donar = receiver.filter((c, index) => {
            return receiver.indexOf(c) === index;
        });
        // let donor = [...new Set(receiver)];
        let data = [];
        //await User.findOne({ email })
        for (let i = 0; i < donar.length; i++) {
            let user = await User.findById(donar[i]);
            data.push(user);
        }
        console.log(data);
        res.json(data);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
})

labRouter.post("/lab/add-blooddonor", auth, async (req, res) => {
    try {
        const { fullname, email, password, bloodgroup, gender, dateOfBirth } = req.body;
        let bloodbank = await BloodBank.findOne({ email: req.email });
        
        let type = 'donor';
        let user = await User.findOne({ email });
        if (user) {
            bloodbank.donator.push(user._id);
            bloodbank = await bloodbank.save();
            user.donation_date.push({ name: bloodbank.labname, date: new Date() });
            await user.save();
            console.log('hii');
            // res.json(user);
        }
        else {

            const hashedPassword = await bcryptjs.hash(password, 8);
            //req.body.password = hashedPassword;
            user = new User({
                fullname, email, password, bloodgroup, gender, dateOfBirth, type
            });
            user.password = hashedPassword;
            user.donation_date.push({ name: bloodbank.labname, date: new Date() });
            user = await user.save();
           // res.json(user);
            console.log(user._id);
            bloodbank.donator.push(user._id);
            bloodbank = await bloodbank.save();
            // res.json(user);

            // let HelperOptions = {

            //     from: process.env.NAME + '<' + (process.env.EMAILID) + '>',
            //     to: user.email,
            //     subject: "Welcome to Dwarkadhish Bloodbank",
            //     text: "Hello " + fullname + "," + "\n" + "your use name and password for login is mention in the below." + "\n" + "UserName : " + email + "\n" + "Password : " + password
            // };

            // transporter.sendMail(HelperOptions, (err, info) => {
            //     if (err) throw err;
            //     console.log("The message was sent");
            // });
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

              
        }
        res.json(user);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
})
module.exports = labRouter;