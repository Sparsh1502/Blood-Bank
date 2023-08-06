import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate, json } from 'react-router-dom'
import '../css/style.css';
import Navbar from './Navbar';
import Footer from './footer';
import ReactPaginate from 'react-paginate';

export default function LabProfile1(props){
    const navigate = useNavigate();
    const [data, setdata] = useState([]);
    // useEffect(() => {
    //     (async () => {
    //         const response = await fetch('http://localhost:5001/lab/show-profile/', {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //         })
    //         setdata(await response.json());
    //         console.log(data);
    //     })();

    // },);
    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:5001/lab/show-profile/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        setdata(await response.json());
        console.log(data);
        })();
      
      },[]);
    return (
        <>
        <Navbar/>
        <div class="title">
                    <h2>Lab User Profile</h2>
                    <hr class="line" />
                </div>
            <section id="donator">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <table class="table table-bordered">
                                <tr>
                                    <th>Name:</th>
                                    <td>{data.labname}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{data.email}</td>
                                </tr>
                                <tr>
                                    <th>Mobile No</th>
                                    <td>{data.mobile_no}</td>
                                </tr>
                                
                            </table>
                        </div>
                        <div class="col-md-6">
                            <table class="table table-bordered">
                                <tr>
                                    <th>City</th>
                                    {/* <th>hello</th> */}
                                    <td>{data.city}</td>
                                </tr>
                                <tr>
                                    <th>Pincode</th>
                                    <td>{data.pincode}</td>
                                </tr>
                                <tr>
                                    <th>Open Time</th>
                                    <td>{data.open_time}</td>
                                </tr>
                            </table>
                        </div>
                        


                        <div class="col-md-12">
                            <table class="table table-bordered">
                                <tr>
                                    <th class="col-md-6">Hospital Address:</th>
                                    <td>{data.address}</td>
                                </tr>
                            </table>
                        </div>
                        {/* <div class="col-md-12"> */}
                        
                        {/* </div> */}
                        {/* <div class="col-md-12">
                            <table class="table table-bordered">
                                <tr>
                                    <td class="col-md-12"><button type="button" class="btn btn-primary btn-lg btn-block" Style = "ali">Block level button</button></td>
                                   
                                </tr>
                            </table>
                        </div> */}
                        <div class = "col-lg-12">
                           {/* // <center><button type="button" class="btn btn-primary btn-lg btn-block lab1" Style = "margin-top:20px " onClick={() => navigate('/LabProfile', { state: data })}>Block level button</button></center> */}
                           <center><input class="btn btn-primary" Style = "height:50px;font-size:20px back; background-color:darkred"type="button" onClick={() => navigate('/LabProfile')}value="Manage Blood Record"></input></center>
                        </div>
                        
                        
                    </div>
                
                    <div class="details-container">
                        <p>Blood Bank refers to a center where the blood which is collected from blood donations is stored and preserved for blood transfusions. A blood bank is a division of a hospital where the blood products are stored and proper testing is performed on them to reduce the risks of adverse events during transfusion. A blood bank can also be referred to a collection center as hospitals also collect through blood donations. The Fortis Escorts Heart Institute has a licensed and NABH Accredited Blood Bank which is committed to ensure availability of sufficient quantity of safe blood / components using state of the art technology for transfusion to patients.
                        </p>
                    </div>
                    {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13648.620397637154!2d29.9420796!3d31.2164321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8476f62bb5008c82!2sAndalusia%20Smouha%20Hospital!5e0!3m2!1sen!2seg!4v1567936654125!5m2!1sen!2seg"
                width="1000" height="550" frameborder="0" style="border:0;" allowfullscreen=""></iframe> */}
                </div>
            </section>
            <Footer/>
        </>
    )
}