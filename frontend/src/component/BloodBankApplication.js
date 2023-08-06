import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import '../css/style.css';
import Loader from './Loader';
import Swal from 'sweetalert2'

import Navbar from './Navbar';


export default function BloodbankApplication(props) {
    // $('#pincode-input1').pincodeInput({inputs:4});
    const [values, setValues] = useState({
        name: '',
        email: '',
        address : '',
        password : '',
        mobile_no : '',
        city: '',
        pincode : '',
        open_time : '',
        license: '',
        issued_date: '',
        error: '',
        success: false
    });
    const {name, email, address, mobile_no, city, pincode, password, open_time, license, issued_date, error, success} = values;
    const handleChange = name => e => {
        console.log(e.target.value);
        setValues({...values, error: false, [name]: e.target.value})
    };

    const clickSubmit = async (e) => {
        e.preventDefault();
        setValues({...values, error: false});

        const response = await fetch('http://localhost:5001/user0/bloodbankapp/', {
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
                 body: JSON.stringify({ labname: values.name, email: values.email, address : values.address, mobile_no : values.mobile_no, city : values.city , open_time : values.open_time, pincode : values.pincode, license : values.license, issued_date : values.issued_date, password : values.password})
        })
        const json = await response.json();
        if(response.ok){
            Swal.fire('Congrats', 'Application Added Succesfully', 'success').then(result => {
                window.location.href = '/'
            })
        }
        else{
            Swal.fire('Oops', json.msg, 'error')
        }
        console.log(json);
        

    }
    return (
        <>
        <Navbar/>
        <div class="title">
                    <h2>Add Application</h2>
                    <hr class="line" />
                </div>
            <section id="Add-Blood-Bank">
                <div className="container">
                    <img src={require('../imgs/logo.png')} alt="" />
                    <form action="submit">
                        <input type="name" onChange={handleChange('name')} placeholder="LabName" required value = {name}/>
                        <input type="email" onChange={handleChange('email')} placeholder="Email" required value = {email} />
                        <input onChange={handleChange('password')} type="password" placeholder='Password' required value={password} />
                        <textarea name="postContent" onChange={handleChange('address')} placeholder='Address' rows={4} cols={40} value = {address} />

                        <input type="Phone" onChange={handleChange('mobile_no')} name="mobileno" placeholder='MobileNo' value = {mobile_no} />
                        <select value={city} onChange={handleChange('city')} >
                        <option value="" disabled = {true}>City</option>
                        <option value="nadiad">Nadiad</option>
                        <option value="anand">Anand</option>
                        <option value="dwarka">Dwarka</option>
                        <option value="vadodara">Vadodara</option>
                        <option value="jodhpar">Jodhpar</option>
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
                        <input type="text" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} onChange={handleChange('issued_date')} placeholder="Issued Date" required value = {issued_date} />
                        <div className="reg-group">
                            {/* <input className="check" type="checkbox" required="" style={{ height: "auto", display: "inline", margin: "0 auto" }} />Agree on terms and conditions<br /> */}
                            <button onClick={clickSubmit} className="submit" type="submit" style={{ backgroundColor: "rgb(51, 58, 65)" }}>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}