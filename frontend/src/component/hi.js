import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate, json } from 'react-router-dom'
import '../css/style.css';
import axios from "axios";
import Navbar from './Navbar';

export default function Hi(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const result = await axios(
          'http://localhost:5001/lab/show-profile/',
        );
  
        setData(result.data);
      }
  
      fetchData();
    },[]);
    const {blood_group} = data[0];
    console.log(blood_group);
    return (
        <>
            <h1>hii</h1>
        </>
    )
}