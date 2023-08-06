import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate, json } from 'react-router-dom'
import '../css/style.css';
import Navbar from './Navbar';
import Footer from './footer';
import ReactPaginate from 'react-paginate';
import Loader from './Loader';

export default function LabApp(props) {

    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(false)
    const [isTrue, setisTrue] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await fetch('http://localhost:5001/lab/show-application/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            setTimeout(() => {
                setLoading(false)
              }, 1000);
            setdata(await response.json());
            console.log(data);
        })();

    }, [isTrue]);


    const accept = async (id) => {
        const response = await fetch(`http://localhost:5001/lab/accept-application/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(response.json());
        setisTrue(true);
    }

    const reject = async (id) => {
        const response = await fetch(`http://localhost:5001/lab/reject-application/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(response.json());
        setisTrue(true);
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
                                <h4>Blood Group : {p.name}</h4>
                                <h4>Quantity : {p.quantity}</h4>
                                <h4>Status : {p.status}</h4>
                            </div>
                            <div class="col-lg-3">
                                {(
                                    () => {
                                        if (p.status === 'Applied') {
                                            return (
                                                <>
                                                    <div className="job-right my-4 flex-shrink-0" Style="position:relative; right:30px; top:0px;">
                                                        <input class="btn btn-primary btn-lg buttons" type="button" onClick={() => { accept(p._id) }} value="Accept"></input>
                                                    </div>
                                                    <div className="job-right my-4 flex-shrink-0" Style="position:relative; right:30px; top:0px;">
                                                        <input class="btn btn-danger btn-lg buttons" type="button" onClick={() => { reject(p._id) }} value="Decline"></input>
                                                    </div>
                                                </>
                                            )
                                        }
                                        else if(p.status === 'Accepted'){
                                            return (
                                                <div class="p-3 mb-2 bg-primary text-white" Style="position:relative; right:30px; top:55px; text-align : center; font-size : 1.5rem;border-radius: 10px;" >Accepted</div>
                                            )
                                        }
                                        else if(p.status === 'Rejected'){
                                            return (
                                                <div class="p-3 mb-2 bg-danger text-white" Style="position:relative; right:30px; top:55px; text-align : center; font-size : 1.5rem;border-radius: 10px;" >Rejected</div>
                                            )
                                        }
                                    }
                                )()}
                               




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
                    <h2>Blood Request</h2>
                    <hr class="line" />
                </div>
            <section id="requests">
                <div class="container">
                {loading && <Loader />}
                    {!loading && displayApplication}
                    { data.length > 0 && !loading && (
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
                    )}
                    {/* {data.map((p,i) => 
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="type">
                                        <h2>AB+</h2>
                                    </div>
                                </div>
                                <div class="data col-lg-6">
                                    <h4>Blood Group : {p.name}</h4>
                                    <h4>Quantity : {p.quantity}</h4>
                                    <h4>Status : {p.status}</h4>
                                </div>

                            </div>
                        </div>
                    </div>
                )} */}
                </div>
            </section>
            <Footer />
        </>
    )
}