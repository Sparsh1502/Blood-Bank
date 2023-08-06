import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'

import '../css/style.css';

export default function Navbar(props) {
    const navigate = useNavigate();
    return (
        <>
        <section id="Nav1">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <i className="fas fa-phone-volume" style={{borderRight: "1px solid gray"}}> +20 127 245 6884
                                &nbsp; &nbsp; </i>
                        </li>
                        <li className="nav-item">
                            <i className="far fa-envelope" style={{paddingLeft: "15px"}}> InfoBloodBank@gmail.com</i>
                        </li>
                    </ul>
                </div>
                <div className="mx-auto order-0 navbar-brand mx-auto">
                    <a href="https://www.instagram.com/ipda3.tech/"><i
                            className="fab fa-instagram github">&nbsp;&nbsp;</i></a>
                    <a href="https://www.facebook.com/ipda3tech/"><i
                            className="fab fa-facebook-f facebook">&nbsp;&nbsp;</i></a>
                    <a href="https://twitter.com/ipda3_tech"><i className="fab fa-twitter twitter">&nbsp;&nbsp;</i></a>
                    <a href="https://api.whatsapp.com/send?phone=+201097571186"><i
                            className="fab fa-whatsapp whats">&nbsp;&nbsp;</i></a>
                </div>
                {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link selected" style={{"border-right": "1px solid gray"}}></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style="padding-left: 15px;" href="#">AR</a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav>
    </section>

    {/* <!-- Navbar 2 Start --> */}
    <section id="Nav2">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={require('../imgs/logo.png')} alt = "" width="18%"></img>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link selected" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="About-us.html">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Articles</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="requests.html">Donations</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/addbloodbank">ADD</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Bloodbanks">ADD</Link>
                    </li>
                </ul>
                {/* <button className="btn signup" onClick= {() => navigate('/Signup')}>New Account</button>
                <button className="btn login" onClick= {() => navigate('/Signin')}>Login</button> */}
            </div>
        </nav>
    </section>
    {/* <!-- Navbar 2 End --> */}

    {/* <!-- Navigator Start --> */}
    {/* <section id="navigator">
        <div class="container">
            <div class="path">
                <div class="path-main" style={{color: "darkred", display:"inline-block"}}>Home</div>
                <div class="path-directio" style={{color: "grey", display:"inline-block"}}> / Sign up</div>
            </div>

        </div>
    </section> */}
    {/* <!-- Navigator End --> */}
    </>
    )
}