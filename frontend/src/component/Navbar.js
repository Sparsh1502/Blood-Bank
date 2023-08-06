import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, signout } from '.';
import '../css/style.css';
import Loader from './Loader';
import Swal from 'sweetalert2'
export default function Navbar(props) {
    const navigate = useNavigate();

    const handlechange = async (e) => {

        Swal.fire('Congrats', 'You are succesfully logout', 'success').then(result => {
            window.location.href = '/'
        })
    }
    return (
        <>
            <section id="Nav1">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="container">
                        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <i className="fas fa-phone-volume" style={{ borderRight: "1px solid gray" }}> +91 6353361895
                                        &nbsp; &nbsp; </i>
                                </li>
                                <li className="nav-item">
                                    <i className="far fa-envelope" style={{ paddingLeft: "15px" }}> InfoBloodBank@gmail.com</i>
                                </li>
                            </ul>
                        </div>
                        <div className="mx-auto order-0 navbar-brand mx-auto">
                            <a href="https://www.instagram.com/b_h_a_win/"><i
                                className="fab fa-instagram github">&nbsp;&nbsp;</i></a>
                            <a href="https://www.facebook.com/bhavin/"><i
                                className="fab fa-facebook-f facebook">&nbsp;&nbsp;</i></a>
                            <a href="https://twitter.com/BhavinSonagara9"><i className="fab fa-twitter twitter">&nbsp;&nbsp;</i></a>
                            <a href="https://api.whatsapp.com/send?phone=+916353361895"><i
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
                    <img src={require('../imgs/logo.png')} alt="" width="18%"></img>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            {(
                                () => {
                                    if (isAuthenticated()  && isAuthenticated().user.type === 'lab') {
                                        return (
                                            <>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/LabDonor">Donor</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link " to="/labReceiver">Receiver</Link>
                                                </li>
                                            </>
                                        )
                                    }
                                    else {
                                        return (
                                            <>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/AdminDonor">Donor</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link " to="/AdminReceiver">Receiver</Link>
                                                </li>
                                            </>
                                        )
                                    }


                                }
                            )()}
                            {/* <li className="nav-item">
                        <Link className="nav-link" to="/AdminDonor">Donor</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/AdminReceiver">Receiver</Link>
                    </li> */}

                            {isAuthenticated() && (isAuthenticated().user.type === 'receiver' || isAuthenticated().user.type === 'donor' || isAuthenticated().user.type === 'user') &&   (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Search">Donations</Link>
                                    </li>
                                    
                                </>
                            )}
                            {isAuthenticated() && isAuthenticated().user.type === 'receiver' && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/UserApp">Application</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/BloodBankApplication">Add Blood Bank</Link>
                                    </li>
                                </>
                            )}
                            {isAuthenticated() && isAuthenticated().user.type === 'lab' && (
                                <>
                                <li className="nav-item">
                                        <Link className="nav-link" to="/LabManageDonor">Manage Donor</Link>
                                    </li>
                                
                                <li className="nav-item">
                                        <Link className="nav-link" to="/LabProfile1">Lab Profile</Link>
                                    </li>

                                    {/* <li className="nav-item">
                                        <Link className="nav-link" to="/BloodBankApplication">Add Blood Bank</Link>
                                    </li> */}

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/labApp">Blood Request</Link>
                                    </li>
                                    
                                </>
                                
                            )}
                            {isAuthenticated() && isAuthenticated().user.type === 'donor' && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/DonorProfile">Profile</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/BloodBankApplication">Add Blood Bank</Link>
                                    </li>
                                </>
                            )}
                            {isAuthenticated() && isAuthenticated().user.type === 'admin' && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/AdminShowApp">Blood Bank Application</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/BloodBanks">BloodBanks</Link>
                                    </li>
                                </>
                            )}
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactus">Contact Us</Link>
                            </li>
                        </ul>
                        {isAuthenticated() && (
                            <button className='btn login' onClick={() => signout(handlechange)} type="submit">Sign Out</button>
                        )}
                        {!isAuthenticated() && (
                            <>
                                <button className="btn signup" onClick={() => navigate('/Signup')}>New Account</button>
                                <button className="btn login" onClick={() => navigate('/Signin')}>Login</button>
                            </>
                        )}

                        {/* //  <button className='btn login' onclick = {handlesignout}>Sign Out</button> */}
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