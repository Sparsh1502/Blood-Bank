import React, { useState, useEffect } from 'react';
import axios from "axios";
import { NavLink, Link, useLocation, useNavigate, json } from 'react-router-dom'
import '../css/style.css';
import Navbar from './Navbar';
import Footer from './footer';
import header from './header';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import Loader from './Loader';
export default function Donorprofile(props) {
    const [data, setdata] = useState({});
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        // setLoading(true)
        function getUser(){
            return fetch('http://localhost:5001/user0/show-profile/')
            .then((res) => res.json())
        }
      getUser().then((res) => setdata(res));
    //   setTimeout(() => {
    //     setLoading(false)
    //   }, 1000);

      },[]);
     // setLoading(false)
      
      console.log(data);
      //const data = {"_id":"640cb49cb066191d64e76f05","fullname":"Bhavin Sonagara","email":"bhavin@mail.com","password":"$2a$08$Chsn1dSI4hIPSgrZhYR9Eer.RVXpWZqSzLSt3UvQDqwZLYxrADdz6","type":"Receiver","bloodgroup":"o+","gender":"male","dateOfBirth":"2023-03-03T00:00:00.000Z","__v":0,"donation_date":[]};
    return (
        <>
        <Navbar/>
        <div class="title">
                    <h2>Donor Profile</h2>
                    <hr class="line" />
                </div>
                {/* {loading && <Loader />} */}
            <section id="donator">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                        
                            <table class="table table-bordered">
                                <tr>
                                    <th>Name:</th>
                                    <td>{data.fullname}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{data.email}</td>
                                </tr>
                                <tr>
                                    <th>User Type</th>
                                    <td>{data.type}</td>
                                </tr>

                            </table>
                        </div>
                        <div class="col-md-6">
                            <table class="table table-bordered">
                                <tr>
                                    <th>Blood Group</th>
                                    {/* <th>hello</th> */}
                                    <td>{data.bloodgroup}</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>{data.gender}</td>
                                </tr>
                                <tr>
                                    <th>Birth Date</th>
                                    <td>{data.dateOfBirth && data.dateOfBirth.split('T')[0]}</td>
                                </tr>
                            </table>
                        </div>
                        {/* {data.donation_date.map((p, i) => */}
                        <div class="col-md-12">
                            <table class="table table-bordered">
                                <tr>
                                    <th>Donation Date</th>
                                    <th>BloodBank</th>
                                </tr>
                                {data.donation_date && data.donation_date.map((p) =>
                                    <tr>
                                        <td>{p.date.split('T')[0]}</td>
                                        <td>{p.name}</td>
                                    </tr>
                                )}
                            </table>
                        </div>
                        {/* )} */}

                    </div>



                </div>



            </section>
            <Footer/>
        </>
    )
}