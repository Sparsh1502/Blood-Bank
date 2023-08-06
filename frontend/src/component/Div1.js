import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate, json } from 'react-router-dom'
import '../css/style1.css';
import Navbar from './Navbar';
import Search from './Search';
// import { NavLink, Link, useNavigate } from 'react-router-dom'

export default function Div1(props) {
  return (
    <>
      {/* <div className="row" style={{ paddingTop: 4 }}>
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
            
            <picture>
              
              <img
                src={require('../imgs/donationFact.jpg')}
                alt="One Donation Can save upto three lives"
              />
            </picture>
            <blockquote>
              <p style={{ fontFamily: "oswald" }}>
                After donating blood, the body works to replenish the blood loss. This
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
        </div>

        
      </div>

      <div className="col-sm-6" style={{ fontSize: "1.5rem" }} align="center">
        <table className="table table-responsive  ">
          <tbody>
            <tr>
              <th colSpan={3} style={{ color: "white", backgroundColor: "red" }}>
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
        </table>
      </div> */}
      <section id = "div1">
      <div className="container div1">
        <div className="row">
          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-pink order-card" Style="background-color: #941313 !important">
              <div className="card-block">
                {/* <h6 className="m-b-20">Orders Received</h6> */}
                <h2 className="text-center">
                  <i class="fa fa-hospital-o fa-3x" aria-hidden="true"></i> &nbsp;
                  {/* <i class="fa-solid fa-hand-holding-medical"></i> */}
                </h2>
                <h4 className="text-center"><Link className="nav-link" to="/Search">Seach For a Blood</Link></h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-blue order-card" Style="background-color: #2981c0 !important">
              <div className="card-block">
                {/* <h6 className="m-b-20">Orders Received</h6> */}
                <h2 className="text-center">
                  <i class="fa fa-hospital-o fa-3x " aria-hidden="true"></i> &nbsp;

                </h2>
                <h4 className="text-center"><Link className="nav-link" to="/Search">Donors</Link></h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-yellow order-card" Style="background-color: #f5af19 !important">
              <div className="card-block">
                {/* <h6 className="m-b-20">Orders Received</h6> */}
                <h2 className="text-center">
                  <i class="fa fa-clock-o fa-3x statIcon " aria-hidden="true"></i> &nbsp;

                </h2>
                <h4 className="text-center"><Link className="nav-link" to="/Search">Receiver</Link></h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-yellow order-card" Style="background-color : #F12711 !important;">
              <div className="card-block">
                {/* <h6 className="m-b-20">Orders Received</h6> */}
                <h2 className="text-center">
                  <i class="fa fa-user-circle-o fa-3x " aria-hidden="true"></i> &nbsp;

                </h2>
                <h4 className="text-center"><Link className="nav-link" to="/Search">Blood Donation Camps</Link></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}