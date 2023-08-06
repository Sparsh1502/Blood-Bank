import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate, json } from 'react-router-dom'
import '../css/style.css';
import Navbar from './Navbar';
import Search from './Search';
import Footer from './footer';
import Div1 from './Div1';
import Div2 from './Div2';
import Div3 from './Div3'
export default function header(props) {
    return (
        <>
            <Navbar/>
            <section id="header">
                <div class="container">
                    {/* <!-- <h1>We are seeking for a better community health.</h1>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellat inventore nemo repudiandae
            ipsum quos.</h4>
        <button class="btn more" onclick= "window.location.href = 'About-us.html';">More</button> --> */}
                </div>
            </section>

            <section id="sub-header">
                <div class="container">
                    <h3>A SINGLE PINT CAN SAVE THREE LIVES, A SINGLE GESTURE CAN CREATE A MILLION SMILES.</h3>
                </div>
            </section>
            <Div2/>
            {/* <Div1/> */}
            
            <Div3/>
            {/* <Search/> */}
            <Footer/>
        </>

    )
}