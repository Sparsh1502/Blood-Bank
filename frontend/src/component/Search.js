import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate, json } from 'react-router-dom'
import '../css/style.css';
import Navbar from './Navbar';
import Footer from './footer';
import Swal from 'sweetalert2'
import ReactPaginate from 'react-paginate';
import { computeStyles } from '@popperjs/core';
import Loader from './Loader';
export default function Search(props) {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const [isTrue, setisTrue] = useState(false)
    const [values, setValues] = useState({

        blood_group: '',
        city: '',
        error: '',
        success: false
    });

    const { blood_group, city, success, error } = values;

    const handleChange = name => e => {
        console.log(e.target.value);
        setValues({ ...values, error: false, [name]: e.target.value })
    };
    const [data, setdata] = useState([]);
    const clickSubmit = async (e) => {
        setisTrue(false);
        e.preventDefault();
        setLoading(true);
        setValues({ ...values, error: false });
        const response = await fetch(`http://localhost:5001/search/${city}/${blood_group}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            // "fullname":"Bhavin Sonagara",
            // "email" : "123@xyz.com",
            // "password" : "Zinal@17",
            // "bloodgroup" : "A+",
            // "gender" : "male",
            // "dateOfBirth" : "1970/1/1"
            // body: JSON.stringify({ bloodgroup: values.blood_group, city: values.city })
        })
        setTimeout(() => {
            setLoading(false)
          }, 1000);
        const dummydata = await response.json();
        // if (dummydata.length < 0) {
        //     console.log("ppppppppppppppppppppppppppppppppppppppppppppppppp")
        //     // Swal.fire('Oops', "No Data Found", 'error')
        // }
        if(!(dummydata > 0)){
            // console.log("hii")
            
            setTimeout(() => {
                setisTrue(true);
              }, 1000);
        //    setisTrue(true);
        }
        else{
            setisTrue(false);
        }
        console.log(typeof dummydata)
        console.log(dummydata)
        setdata(dummydata);
        console.log(data);
    }

    const [pageNumber, setPageNumber] = useState(0);

    const PerPage = 5;
    const pagesVisited = pageNumber * PerPage;
    const displayApplication = data
        .slice(pagesVisited, pagesVisited + PerPage)
        .map((p) => {
            return (
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="type">
                                    <h2>AB+</h2>
                                </div>
                            </div>
                            <div class="data col-lg-6">
                                <h4>{p.labname}</h4>
                                <h4>Hospital: Andalusia Hospitals</h4>
                                <h4>{p.city}</h4>
                            </div>
                            <div class="col-lg-3">
                                <button onClick={() => navigate('/Details', { state: p })}>Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    const pageCount = Math.ceil(data.length / PerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            <Navbar />
            <div class="title">
                <h2>Looking for a Blood</h2>
                <hr class="line" />
            </div>
            <section id="requests">


                <div class="container">
                    {/* <form action="submit"> */}
                    <div class="row">
                        <div class="col-lg-5">
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
                        </div>
                        <div class="col-lg-5">
                            <select value={city} onChange={handleChange('city')} >
                                <option value="" disabled={true}>City</option>
                                <option value="nadiad">Nadiad</option>
                                <option value="anand">Anand</option>
                                <option value="dwarka">Dwarka</option>
                                <option value="vadodara">Vadodara</option>
                                <option value="Dwarka">Jodhpur</option>
                            </select>
                        </div>
                        <div class="search">
                            <button onClick={clickSubmit} ><i class="col-lg-2 fas fa-search"></i></button>
                        </div>
                    </div>
                    {loading && <Loader />}
                    {(!loading && data.length > 0) ? (
                        <>
                        {displayApplication }
                    
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
                    
                    </>
                    ) : ( isTrue && (<div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                            {/* <div class="col-lg-3">
                                <div class="type">
                                    <h2>AB+</h2>
                                </div>
                            </div> */}
                            <div class="data col-lg-12">
                                {/* <h4>{p.labname}</h4>
                                <h4>Hospital: Andalusia Hospitals</h4>
                                <h4>{p.city}</h4> */}
                                <center><h4>Blood Not Aviable</h4></center>
                                <center><h4>Please Seach for Other Details</h4></center>

                            </div>
                            {/* <div class="col-lg-3">
                                <button onClick={() => navigate('/Details', { state: p })}>Details</button>
                            </div> */}
                        </div>
                    </div>
                </div>))}
                    {/* </form> */}
                    {/* {data.map((p, i) => */}
                    {/* <div class="row">
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="col-lg-3">
                                        <div class="type">
                                            <h2>AB+</h2>
                                        </div>
                                    </div>
                                    <div class="data col-lg-6">
                                        <h4>{p.labname}</h4>
                                        <h4>Hospital: Andalusia Hospitals</h4>
                                        <h4>{p.city}</h4>
                                    </div>
                                    <div class="col-lg-3">
                                        <button onClick={() => navigate('/Details', { state: p })}>Details</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    {/* )} */}

                </div>
            </section>

            <Footer />
        </>
    )
}
