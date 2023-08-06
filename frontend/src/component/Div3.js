import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate, json } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Navbar from './Navbar';
import Search from './Search';

export default function Div3() {
    return (
        <>
        <section id = "div3">
            <div className="row" style={{ paddingTop: 4 }}>
                <div className="row text-center">
                    <div className="col-md-12 typeHeading">
                        <h1 className="learnAbout">Learn About Donation</h1>
                    </div>
                    <br />
                    <br />
                    <div
                        className="wow col-sm-6 rotateInDownRight text-center animated"
                        data-wow-delay="0ms"
                        data-wow-duration="1000ms"
                        style={{
                            visibility: "visible",
                            animationDuration: "1000ms",
                            animationDelay: "0ms",
                            animationName: "rotateInDownRight"
                        }}
                    >
                        {/* <img src='assets/donationFact.jpg'></img> */}
                        <picture>
                            {/* <source srcset="donationFact.webp" type="image/webp">
              <source srcset="donationFact.jpg" type="image/jpeg"> */}
              
                            <img src = {require('../imgs/div3.png')} alt="One Donation Can save upto three lives" />
                        </picture>
                        <blockquote>
                            <p style={{ fontFamily: "oswald" }}>
                                After donating blood, the body works to replenish the blood loss. <br/>This
                                stimulates the production of new blood cells and in turn, helps in
                                maintaining good health.
                            </p>
                            <p></p>
                        </blockquote>
                        <button
                            onclick="window.location='/BLDAHIMS/bloodbank/nearbyBBRed.cnt'"
                            className="btn btn-danger svcNearBy hvr-sweep-to-right "
                        >
                            <i className="fa fa-tint" aria-hidden="true" />
                            &nbsp; Donate Now
                        </button>
                        <br />
                        <br />
                    </div>
                    <div
                        className="col-sm-5"
                        style={{ fontSize: "1.5rem, align=center" }}
                    >
                        <Table>
                            <tbody>
                                <tr>
                                    <th
                                        colSpan={3}
                                        style={{
                                            color: "white",
                                            backgroundColor: "red",
                                            textAlign: "center"
                                        }}
                                    >
                                        Compatible Blood Type Donors
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Blood Type</b>
                                    </td>
                                    <td>
                                        <b>Donate Blood To</b>
                                    </td>
                                    <td>
                                        <b>Receive Blood From</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span style={{ color: "#961e1b" }}>
                                            <b>A+</b>
                                        </span>
                                    </td>
                                    <td>A+ AB+</td>
                                    <td>A+ A- O+ O-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span style={{ color: "#961e1b" }}>
                                            <b>O+</b>
                                        </span>
                                    </td>
                                    <td>O+ A+ B+ AB+</td>
                                    <td>O+ O-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span style={{ color: "#961e1b" }}>
                                            <b>B+</b>
                                        </span>
                                    </td>
                                    <td>B+ AB+</td>
                                    <td>B+ B- O+ O-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span style={{ color: "#961e1b" }}>
                                            <b>AB+</b>
                                        </span>
                                    </td>
                                    <td>AB+</td>
                                    <td>Everyone</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span style={{ color: "#961e1b" }}>
                                            <b>A-</b>
                                        </span>
                                    </td>
                                    <td>A+ A- AB+ AB-</td>
                                    <td>A- O-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span style={{ color: "#961e1b" }}>
                                            <b>O-</b>
                                        </span>
                                    </td>
                                    <td>Everyone</td>
                                    <td>O-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span style={{ color: "#961e1b" }}>
                                            <b>B-</b>
                                        </span>
                                    </td>
                                    <td>B+ B- AB+ AB-</td>
                                    <td>B- O-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span style={{ color: "#961e1b" }}>
                                            <b>AB-</b>
                                        </span>
                                    </td>
                                    <td>AB+ AB-</td>
                                    <td>AB- A- B- O-</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            </section>

        </>
    )
}


