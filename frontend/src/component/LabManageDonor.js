import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate, json } from 'react-router-dom'
import '../css/style.css';
import Navbar from './Navbar';
import Footer from './footer';
import ReactPaginate from 'react-paginate';
import Loader from './Loader';
import Swal from 'sweetalert2'
export default function LabManageDonor(props) {
    const [values, setValues] = useState({
        name: '',
        email: '',
        birthdate: '',
        donationdate: '',
        already: '',
        blood_group: '',
        gender: '',

    });
    // const [already, setalready] = useState(false);
    const navigate = useNavigate();
    const [show, setshow] = useState(false);
    const [show1, setshow1] = useState(true);
    const [error, seterror] = useState("");
    const [loading, setLoading] = useState(false)
    const [err, seterr] = useState("");
    const { name, email, blood_group, gender, birthdate, donationdate, already, city } = values;


    const handleChange = name => e => {
        //console.log(name);
        if (name === 'already') {
            // console.log(name);
            const temp = e.target.value;
            if (temp === 'yes') {
                setshow(true);
                console.log(show);
            }
            else {
                setshow(false);
            }
        }
        //console.log(e.target.value);
        setValues({ ...values, error: false, [name]: e.target.value })
    };
    const clickSubmit = async (e) => {
        e.preventDefault();
        if (!values.birthdate || (values.already === 'yes' && !values.donationdate)) {
            seterror("All field must be required");
            Swal.fire('Oops', "All field must be required", 'error');
        }
        console.log(values.donationdate);
        var date1 = new Date(values.birthdate);
        var date2 = new Date(values.donationdate);
        var today = new Date();
        var diffDays = parseInt((today - date2) / (1000 * 60 * 60 * 24), 10);
        var diffDays1 = parseInt((today - date1) / (1000 * 60 * 60 * 24), 10);
        console.log(typeof (diffDays1));
        if (diffDays1 < 6570) {
            Swal.fire('Oops', "Donor age must be more than 18 year", 'error');
        }
        if (diffDays < 90) {
            Swal.fire('Oops', "your last donation was less than three month ago", 'error');
        }
        if (show1 && ((diffDays >= 90 && diffDays1 >= 6570) || (isNaN(diffDays) && diffDays1 >= 6570))) {
            Swal.fire('Verified', "User Eligible for blood donation", 'success');
            setshow1(false);
        }
        let text = values.email;
        let array = text.split('@');
        let pass = array[0];
        let password = pass + '@' + new Date().getDate();
        if (!show1) {

            if (!values.name || !values.email || !values.blood_group || !values.birthdate || !values.gender) {
                Swal.fire('Oops', "All field must be required", 'error');
            }
            else {
                const response = await fetch('http://localhost:5001/lab/add-blooddonor', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ fullname: values.name, email: values.email, password: password, bloodgroup: values.blood_group, gender: values.gender, dateOfBirth: values.birthdate })
                })
                const json = await response.json();
                console.log(json);
                if (response.ok) {
                    const res = await fetch('http://localhost:5001/lab/add-bloodsample/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },

                        body: JSON.stringify({ quantity: 1, name: blood_group })
                    })
                    console.log(await res.json());
                    Swal.fire('Congrats', "Donor Added Successfully", 'success').then(result => {
                        window.location.href = '/LabManageDonor'
                       // navigate('/LabManageDonor')
                    })
                    
                }
                else{
                    Swal.fire('Oops', json.error, 'error')
                }
            }
        }

        //Swal.fire('Oops', error, 'error');
        //seterror("");
    }
    //Swal.fire('Oops', error, 'error');
    return (
        <>
        <Navbar/>
        <div class="title">
                    <h2>Manage Blood Donor</h2>
                    <hr class="line" />
                </div>
            <section id="sign-up">
                <div className="container">
                    <form >
                    {loading && <Loader />}
                    <img src={require('../imgs/logo.png')} alt="" />
                        {!show1 && (<>
                            <input onChange={handleChange('name')} type="name" placeholder="Name" required value={name} />
                            <input onChange={handleChange('email')} type="email" placeholder="Email" required value={email} />
                            <select value={blood_group} onChange={handleChange('blood_group')} >
                                <option value="" disabled={true}>Blood Type</option>
                                <option value="a+">a+</option>
                                <option value="a-">a-</option>
                                <option value="b+">b+</option>
                                <option value="b-">b-</option>
                                <option value="o+">o+</option>
                                <option value="o-">o-</option>
                                <option value="ab+">ab+</option>
                                <option value="ab-">ab-</option>
                            </select>
                            <select value={gender} onChange={handleChange('gender')} >
                                <option value="" disabled={true}>Gender</option>
                                <option value="male">Male</option>
                                <option value="fenale">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </>
                        )}
                        {show1 && (
                            <select value={already} onChange={handleChange('already')} >
                                <option value="" disabled={true}>Already Donated</option>
                                <option value="yes">YES</option>
                                <option value="no">No</option>
                            </select>
                        )}
                        {/* //<input className="username" type="Username" name = "email" placeholder="Username" required onChange={onChange('email')}/> */}
                        <input onChange={handleChange('birthdate')} type="text" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} name="bday" placeholder="Birth date" value={birthdate} />
                        {show && show1 && (<input onChange={handleChange('donationdate')} type="text" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} name="bday" placeholder="Donation date" value={donationdate} />)}

                        {show1 && (
                            <div className="reg-group">
                                {/* <button onClick={clickSubmit} className="btn btn-primary">Login</button> */}
                                {/* <button type="submit">Sign Up</button> */}
                                <button style={{ backgroundColor: "darkred" }} onClick={clickSubmit}>Verify</button>
                                {/* <button style={{backgroundColor: "rgb(51, 58, 65)" }}>Make new account</button> */}
                            </div>
                        )}
                        {!show1 && (
                            <div className="reg-group">
                                {/* <button onClick={clickSubmit} className="btn btn-primary">Login</button> */}
                                {/* <button type="submit">Sign Up</button> */}
                                <button style={{ backgroundColor: "darkred" }} onClick={clickSubmit}>Submit</button>
                                {/* <button style={{backgroundColor: "rgb(51, 58, 65)" }}>Make new account</button> */}
                            </div>
                        )}
                    </form>
                </div>
            </section>
            <Footer/>
        </>
    )
}