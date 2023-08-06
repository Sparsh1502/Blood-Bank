import React, { useState, useEffect } from 'react'
import { NavLink, Link, useLocation, useNavigate, json } from 'react-router-dom'
import '../css/style.css';
import Navbar from './Navbar';
import header from './header';
import Swal from 'sweetalert2'
import Footer from './footer';
export default function Details(props) {

    const location = useLocation();
    //console.log('location', location);
    const [noofsample, setsample] = useState(0)
    const val = new Map([
        ["a+", 0],
        ["a-", 0],
        ["b+", 0],
        ["b-", 0],
        ["o+", 0],
        ["o-", 0],
        ["ab+", 0],
        ["ab-", 0],
    ]);

    //console.log(location.state.blood_group);
    for (let i = 0; i < location.state.blood_group.length; i++) {
        let str1 = location.state.blood_group[i]['name'];
        //  console.log(name);
        if (str1 === 'a+') {
            let blood_groupss = location.state.blood_group.find((blood_groups) =>
                blood_groups['name'] === 'a+'
            );
            val.set("a+", blood_groupss.quantity);
            // setval({ ...val, a1: blood_groupss.quantity})
        }
        else if (str1 === 'a-') {
            let blood_groupss = location.state.blood_group.find((blood_groups) =>
                blood_groups['name'] === 'a-'
            );
            val.set("a-", blood_groupss.quantity);
            // setval({ ...val, a1: blood_groupss.quantity})
        }
        else if (str1 === 'b+') {
            let blood_groupss = location.state.blood_group.find((blood_groups) =>
                blood_groups['name'] === 'b+'
            );
            val.set("b+", blood_groupss.quantity);
            // setval({ ...val, a1: blood_groupss.quantity})
        }
        else if (str1 === 'b-') {
            let blood_groupss = location.state.blood_group.find((blood_groups) =>
                blood_groups['name'] === 'b-'
            );
            val.set("b-", blood_groupss.quantity);
            // setval({ ...val, a1: blood_groupss.quantity})
        }
        else if (str1 === 'o+') {
            let blood_groupss = location.state.blood_group.find((blood_groups) =>
                blood_groups['name'] === 'o+'
            );
            val.set("o+", blood_groupss.quantity);
            // setval({ ...val, a1: blood_groupss.quantity})
        }
        else if (str1 === 'o-') {
            let blood_groupss = location.state.blood_group.find((blood_groups) =>
                blood_groups['name'] === 'o-'
            );
            val.set("o-", blood_groupss.quantity);
            // setval({ ...val, a1: blood_groupss.quantity})
        }
        else if (str1 === 'ab+') {
            let blood_groupss = location.state.blood_group.find((blood_groups) =>
                blood_groups['name'] === 'ab+'
            );
            val.set("ab+", blood_groupss.quantity);
            // setval({ ...val, a1: blood_groupss.quantity})
        }
        else if (str1 === 'ab-') {
            let blood_groupss = location.state.blood_group.find((blood_groups) =>
                blood_groups['name'] === 'ab-'
            );
            val.set("ab-", blood_groupss.quantity);
            // setval({ ...val, a1: blood_groupss.quantity})
        }


    }

    const navigate = useNavigate();
    const [values, setValues] = useState({

        blood_group: '',
        quantity : ' ',
        error: '',
        success: false
    });

    const { blood_group, quantity, success, error } = values;

    const handleChange = name => e => {
        console.log(name);
        if(name === 'blood_group'){
          // console.log("hii")
          // console.log(val.get(e.target.value))
            setsample(val.get(e.target.value));
        }
        // else if(name === "quantity"){
            
        // }
        setValues({ ...values, error: false, [name]: e.target.value })
    };
    //let isTrue = false;
    const [isTrue, setisTrue] = useState(false);
    const clickSubmit = async (e) => {
        e.preventDefault();
        setValues({ ...values, error: false });
        const response = await fetch('http://localhost:5001/user0/req-blood-sample', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({ name: values.blood_group, applicationid : location.state._id, quantity : values.quantity })
        })
        if(response.ok){
            Swal.fire('Congrats', 'Request Added Successfully', 'success')
            console.log('no');
        }
        else{
            const res = await response.json();
            console.log(res)
            Swal.fire('Oops',res.msg, 'error')
        }
        // else{
        //     console.log('no');
        // }
       // setdata(await response.json());
        console.log(response.json());
    }
    return (
        <>
            <Navbar />
            <div class="title">
                    <h2>Blood Bank Details</h2>
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
                                    <th>Email:</th>
                                    <td>{location.state.email}</td>
                                </tr>
                                <tr>
                                    <th>Mobile No:</th>
                                    <td>{location.state.mobile_no}</td>
                                </tr>
                            </table>
                        </div>
                        <div class="col-md-6">
                            <table class="table table-bordered">
                            <tr>
                                    <th>City:</th>
                                    {/* <th>hello</th> */}
                                    <td>{location.state.city}</td>
                                </tr>
                                <tr>
                                    <th>Pincode:</th>
                                    <td>{location.state.pincode}</td>
                                </tr>
                                <tr>
                                    <th>Opentime:</th>
                                    <td>{location.state.open_time}</td>
                                </tr>
                            </table>
                        </div>
                        <div class="col-md-12">
                            <table class="table table-bordered">
                                <tr>
                                    <th>Blood Group</th>
                                    <th>A+</th>
                                    <th>A-</th>
                                    <th>B+</th>
                                    <th>B-</th>
                                    <th>O+</th>
                                    <th>O-</th>
                                    <th>AB+</th>
                                    <th>AB-</th>
                                </tr>
                                <tr>
                                    <th>Aviable</th>
                                    <td>{val.get('a+')}</td>
                                    <td>{val.get('a-')}</td>
                                    <td>{val.get('b+')}</td>
                                    <td>{val.get('b-')}</td>
                                    <td>{val.get('o+')}</td>
                                    <td>{val.get('o-')}</td>
                                    <td>{val.get('ab+')}</td>
                                    <td>{val.get('ab-')}</td>
                                </tr>
                            </table>
                        </div>


                        <div class="col-md-12">
                            <table class="table table-bordered">
                                <tr>
                                    <th>Hospital Address:</th>
                                    <td>Alexandria - Somuha - Fouad St. - B122</td>
                                </tr>
                            </table>
                        </div>
                        <div class="col-md-12">
                            <table class="table table-bordered">
                                <tr>
                                    <th class="col-md-3">Request Blood : </th>
                                    <td class="col-md-3"><div class="col-md-5">
                                        <select value={blood_group} onChange={handleChange('blood_group')} required>
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
                                    </div>
                                    </td>
                                    {/* <td class="col-md-3">hrllo</td> */}
                                    <td class="col-md-3">
                                    
                                        <input placeholder = "Quantity" type="number" min = "1" max={noofsample} onChange={handleChange('quantity')} value = {quantity} required/>

                                    </td>
                                    <td class="col-md-3"><button onClick={clickSubmit} class="submit" type="submit" >Submit</button></td>

                                </tr>
                            </table>
                        </div>
                        
                    </div>
                    {/* { isTrue && (
                    <div class="details-container">
                        <p>congratulations</p>
                    </div> )
                    } */}
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