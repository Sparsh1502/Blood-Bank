import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import '../css/style.css';

import AdminNavbar from './AdminNavbar';


export default function AddBloodBank(props) {
    // $('#pincode-input1').pincodeInput({inputs:4});
    const [values, setValues] = useState({
        name: '',
        email: '',
        address : '',
        mobile_no : '',
        city: '',
        pincode : '',
        open_time : '',
        license : '',
        issued_date : '',
        error: '',
        success: false
    });
    const {name, email, address, mobile_no, city, pincode, open_time,license, issued_date, error, success} = values;
    const handleChange = name => e => {
        console.log(e.target.value);
        setValues({...values, error: false, [name]: e.target.value})
    };

    const clickSubmit = async (e) => {
        e.preventDefault();
        setValues({...values, error: false});

        const response = await fetch('http://localhost:5001/admin/add-bloodbank', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // "fullname":"Bhavin Sonagara",
                // "email" : "123@xyz.com",
                // "password" : "Zinal@17",
                // "bloodgroup" : "A+",
                // "gender" : "male",
                // "dateOfBirth" : "1970/1/1"
                 body: JSON.stringify({ labname: values.name, email: values.email, address : values.address, mobile_no : values.mobile_no, city : values.city , open_time : values.open_time, pincode : values.pincode})
        })
        const json = await response.json();
        console.log(json);
        let text = values.email;
        let array = text.split('@');
        let pass = array[0];
        let password = pass + '@' + new Date().getDate();
        console.log(password);
        const response1 = await fetch('http://localhost:5001/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // "fullname":"Bhavin Sonagara",
                // "email" : "123@xyz.com",
                // "password" : "Zinal@17",
                // "bloodgroup" : "A+",
                // "gender" : "male",
                // "dateOfBirth" : "1970/1/1"
                 body: JSON.stringify({ fullname: values.name, email: values.email, password: password})
        })
        console.log('hi');
        const json1 = await response1.json();
        console.log(json1);

    }
    return (
        <>
        <AdminNavbar/>
            <section id="Add-Blood-Bank">
                <div className="container">
                    <img src={require('../imgs/logo.png')} alt="" />
                    <form action="submit">
                        <input type="name" onChange={handleChange('name')} placeholder="LabName" required value = {name}/>
                        <input type="email" onChange={handleChange('email')} placeholder="Email" required value = {email} />
                        <textarea name="postContent" onChange={handleChange('address')} placeholder='Address' rows={4} cols={40} value = {address} />

                        <input type="Phone" onChange={handleChange('mobile_no')} name="mobileno" placeholder='MobileNo' value = {mobile_no} />
                        <select value={city} onChange={handleChange('city')} >
                        <option value="" disabled = {true}>City</option>
                        <option value="nadiad">Nadiad</option>
                        <option value="anand">Anand</option>
                        <option value="dwarka">Dwarka</option>
                        <option value="vadodara">Vadodara</option>
                        <option value="vadodara">Dwarka</option>
                    </select>
                        <input type="text" onChange={handleChange('pincode')} name="pincode" placeholder='PinCode' value = {pincode} />
                        <select value={open_time} onChange={handleChange('open_time')} >
                            <option value="" disabled={true}>Open Time</option>
                            <option value="24*7">24*7</option>
                            <option value="12*7">12*7</option>
                        </select>
                        {/* <select name="Gov" id="Gov" required="">
                            <option value="Governorate" disabled>Governorate</option>
                            <option value="A">Alexandria</option>
                            <option value="B">Cairo</option>
                            <option value="O">Giza</option>
                            <option value="AB+">Fayoum</option>
                        </select>
                        <input type="Phone" placeholder="Phone Number" required="" />
                        <input type="date" name="donate-day" /> */}
                        <input type="text" onChange={handleChange('license')} placeholder="License" required value = {license} />
                        <input type="date" onChange={handleChange('issued_date')} placeholder="Issued Date" required value = {issued_date} />
                        <div className="reg-group">
                            <input className="check" type="checkbox" required="" style={{ height: "auto", display: "inline", margin: "0 auto" }} />Agree on terms and conditions<br />
                            <button onClick={clickSubmit} className="submit" type="submit" style={{ backgroundColor: "rgb(51, 58, 65)" }}>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}