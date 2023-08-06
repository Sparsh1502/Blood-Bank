import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate, json } from 'react-router-dom'
import '../css/style.css';
import axios from "axios";
import Navbar from './Navbar';
import Footer from './footer';
import Swal from 'sweetalert2'

export default function ContactUs() {

    const [values, setValues] = useState({
        name : '',
        email: '',
        phone: '',
        title: '',
        message : ''
    });
    const { name, email, phone, title, message } = values;
    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value })
    };

   const clickSubmit = async(e) => {
    if(!(name && email && phone && title && message)){
        Swal.fire('Oops', "All field must be required", 'error')
    }
    else{
        Swal.fire('Congrats', "Response Added Successfully", 'success')
    }
   }
    
    return (
    <>
    <Navbar/>
    <div class="title">
                    <h2>Contact Us</h2>
                    <hr class="line" />
                </div>
        <section id="contact">  
            <div className="container">
                <div className="row">
                    <div className="col-md-6 call">
                        <div className="title">Head</div>
                        <img src={require("../imgs/logo.png")} alt="" />
                        <hr />
                        <h4>Mobile: +91 6353361895</h4>
                        <h4>Fax: +2 455 6646</h4>
                        <h4>Email: InfoBloodBank@gmail.com</h4>
                        <hr />
                        <h3>Find Us On</h3>
                        <div className="icons">
                            <i className="fab fa-facebook-square fa-3x" />
                            <i className="fab fa-google-plus-square fa-3x" />
                            <i className="fab fa-twitter-square fa-3x" />
                            <i className="fab fa-whatsapp-square fa-3x" />
                            <i className="fab fa-youtube-square fa-3x" />
                        </div>
                    </div>
                    <div className="col-md-6 info">
                        <div className="title">Head</div>
                        <form onSubmit={clickSubmit}>
                            <input type="text"  id="" placeholder="Name" onChange={handleChange('name')} value={name} required="" />
                            <input
                                type="email"
                                // name="name"
                                id=""
                                placeholder="Email"
                                onChange={handleChange('email')}
                                value={email}
                                required=""
                            />
                            <input
                                type="number"
                                // name="name"
                                id=""
                                placeholder="Phone"
                                onChange={handleChange('phone')}
                                value={phone}
                                required=""
                            />
                            <input
                                type="text"
                                // name="title"
                                id=""
                                placeholder="Title"
                                onChange={handleChange('title')}
                                value={title}
                                required=""
                            />
                            <textarea
                                // name="message"
                                id=""
                                cols={10}
                                rows={5}
                                onChange={handleChange('message')}
                                value={message}
                                placeholder="Message"
                                defaultValue={""}
                            />
                            <div className="reg-group">
                                <button type="submit" >Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </>
    )
}