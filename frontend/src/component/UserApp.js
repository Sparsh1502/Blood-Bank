import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate, json } from 'react-router-dom'
import '../css/style.css';
import Navbar from './Navbar';
import Footer from './footer';
import ReactPaginate from 'react-paginate';
import Loader from './Loader';

export default function UserApp(props) {
    const [loading, setLoading] = useState(false)
    const [data, setdata] = useState([]);
    useEffect(() => {
        (async () => {
            setLoading(true)
            const response = await fetch('http://localhost:5001/user0/show-application/', {
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
            setdata(await response.json());
            console.log(data);
        })();

    }, []);

    const [pageNumber, setPageNumber] = useState(0);

    const PerPage = 3;
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
            <Navbar/>
            <div class="title">
                    <h2>Blood request</h2>
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
            <Footer/>
        </>
    )
}