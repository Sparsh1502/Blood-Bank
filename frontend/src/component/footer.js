import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate, json } from 'react-router-dom'
import '../css/style.css';
import Navbar from './Navbar';


export default function footer(props){
    return (
        <>
            <section id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div class="foot-info">
                        <img src={require('../imgs/logo.png')} alt=""/>
                        <p>We are here to help you to find blood in emergency to needy.</p>
                    </div>
                </div>
                {/* <div class="col-md-3">
                    <ul class="menu">
                        <a href="index.html">
                            <li>Home</li>
                        </a>
                        <a href="About-us.html">
                            <li>About Us</li>
                        </a>
                        <a href="#articles">
                            <li>Articles</li>
                        </a>
                        <a href="requests.html">
                            <li>Donations</li>
                        </a>
                        <a href="who-we-are.html">
                            <li>Who We Are?</li>
                        </a>
                        <a href="contact-us.html">
                            <li>Contact Us</li>
                        </a>
                    </ul>
                </div> */}
                <div class="col-md-4">
                    <ul class="options">
                        <li>
                            <h5>Available On</h5>
                        </li>
                     {/* //   {require('../imgs/logo.png')} */}
                        <li><img src={require('../imgs/ios1.png')} alt=""/></li>
                        <li><img src={require('../imgs/google1.png')} alt=""/></li>
                    </ul>
                </div>
            </div>

            <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <p>
            Terms and Conditions  |  Terms of Use  |  Privacy Policy  |  Hyperlinking Policy  |  Disclaimer  |  Sitemap 
            </p>
          </div>
        </div>
        </div>
    </section>
        </>
    )
}