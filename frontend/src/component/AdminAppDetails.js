import React, { useState, useEffect } from 'react'
import { NavLink, Link, useLocation, useNavigate, json } from 'react-router-dom'
import '../css/style.css';
import Navbar from './Navbar';
import Footer from './footer';
import ReactPaginate from 'react-paginate';
import header from './header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function AdminAppDetails(props) {
    const location = useLocation();
    const [status, setstatus] = useState(0);
    const [message, setmessage] = useState("");
    const [show, setShow] = useState(false);
    const [istrue, setistrue] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setdata] = useState([]);
    useEffect(() => {
       
        (async () => {
            const response = await fetch(`http://localhost:5001/admin/show-app/${location.state._id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        setdata(await response.json());
        console.log(data);
        })();
      
      },[istrue]);
      console.log(data.status);
    const acceptapplication = async (id) => {
        const response = await fetch(`http://localhost:5001/admin/accept-application/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(response.json());
        setistrue(true);
    }

    const rejectapplication = async (id) => {
        const response = await fetch(`http://localhost:5001/admin/reject-application/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(response.json());
        setistrue(true);
    }
    const sendmail = async (message) => {
        console.log(message);
        const response = await fetch('http://localhost:5001/admin/send-mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message : message, email : location.state.email})
        })
        console.log(response.json());
    }
    const clickSubmit = async (e) => {
        e.preventDefault();
        setstatus(1);
        acceptapplication(location.state._id);
        setmessage(`Conagratulation ${location.state.labname}, \n Your Blood Bank added succesfully to the Blood Buddies Blood Bank management system. Now you can login with your details to the application.
        \n Regards, \n Blood Buddies `)
        console.log(message);
        const response = await fetch('http://localhost:5001/admin/add-bloodbank', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(location.state)
        })
        const json = await response.json();
        console.log(json);
        const response1 = await fetch('http://localhost:5001/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fullname: location.state.labname, email: location.state.email, password: location.state.password , type : "lab"})
        })
        const json1 = await response1.json();
        console.log(json1);
        sendmail(message);
    }

    const clickSubmit1 = async (e) => {
        setShow(true);
    }
    const handleClose1 = async (e) => {
       setShow(false);
       sendmail(message);
       rejectapplication(location.state._id);
    }
    console.log(message);
    return (
        <>
        <Navbar/>
        <div class="title">
                    <h2>Application Details</h2>
                    <hr class="line" />
                </div>
            <section id="donator">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <table class="table table-bordered">
                                <tr>
                                    <th>Name:</th>
                                    <td>{location.state.labname}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{location.state.email}</td>
                                </tr>
                                <tr>
                                    <th>Mobile No</th>
                                    <td>{location.state.mobile_no}</td>
                                </tr>
                                <tr>
                                    <th>City</th>
                                    <td>{location.state.city}</td>
                                </tr>
                            </table>
                        </div>
                        <div class="col-md-6">
                            <table class="table table-bordered">
                                <tr>
                                    <th>Pin Code</th>
                                    {/* <th>hello</th> */}
                                    <td>{location.state.pincode}</td>
                                </tr>
                                <tr>
                                    <th>Open Time</th>
                                    <td>{location.state.open_time}</td>
                                </tr>
                                <tr>
                                    <th>License</th>
                                    <td>{location.state.license}</td>
                                </tr>
                                <tr>
                                    <th>Issued Date</th>
                                    <td>{location.state.issued_date.split("T")[0]}</td>
                                </tr>
                            </table>
                        </div>


                        <div class="col-md-12">
                            <table class="table table-bordered">
                                <tr>
                                    <th class="col-md-6">Hospital Address:</th>
                                    <td>{location.state.address}</td>
                                </tr>
                            </table>
                        </div>

                    </div>
                    <div class="row">
                        {(
                            () => {
                                if (data.status === "Applied") {
                                    return (
                                        <>
                                            <div class="col-lg-6">
                                                {/* // <center><button type="button" class="btn btn-primary btn-lg btn-block lab1" Style = "margin-top:20px " onClick={() => navigate('/LabProfile', { state: data })}>Block level button</button></center> */}
                                                <center><input class="btn btn-primary" Style="height:50px;font-size:20px;background-color:darkred" type="button" value="Accept Request" onClick={clickSubmit}></input></center>
                                            </div>
                                            <div class="col-lg-6">
                                                {/* // <center><button type="button" class="btn btn-primary btn-lg btn-block lab1" Style = "margin-top:20px " onClick={() => navigate('/LabProfile', { state: data })}>Block level button</button></center> */}
                                                <center><input class="btn btn-primary" Style="height:50px;font-size:20px;background-color:darkred" type="button" value="Decline Request" onClick={clickSubmit1}></input></center>
                                            </div>
                                        </>
                                    )
                                }
                                else if (data.status === "Accepted") {
                                    return (
                                        <div class="col-lg-12">
                                            {/* // <center><button type="button" class="btn btn-primary btn-lg btn-block lab1" Style = "margin-top:20px " onClick={() => navigate('/LabProfile', { state: data })}>Block level button</button></center> */}
                                            <center><input class="btn btn-primary" Style="height:50px;font-size:20px;background-color:darkred" type="button" value="Request Accepted" ></input></center>
                                        </div>
                                    )
                                }
                                else if (data.status === "Rejected") {
                                    return (
                                        <div class="col-lg-12">
                                            {/* // <center><button type="button" class="btn btn-primary btn-lg btn-block lab1" Style = "margin-top:20px " onClick={() => navigate('/LabProfile', { state: data })}>Block level button</button></center> */}
                                            <center><input class="btn btn-primary btn-outline-none" Style="height:50px;font-size:20px;background-color:darkred" type="button" value="Request Rejected" ></input></center>
                                        </div>
                                    )
                                }
                            }
                        )()}
                    </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>

                        <Modal.Title>Why are you decline request?</Modal.Title>
                        <Button type="button" className="close" data-dismiss="modal" area-hidden="true" onClick={handleClose}><i class="fa fa-window-close" aria-hidden="true"></i></Button>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Reason</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange = {(e) => setmessage(`Hello ${location.state.labname}, \n there are some issue with your application. So, solve the issue given in the Reason. \n Reason : ${e.target.value}. \n \n Regards, \n Blood Buddies `)}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={handleClose1}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section>
            <Footer/>

        </>
    )
}