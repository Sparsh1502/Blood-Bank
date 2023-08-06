import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate, json } from 'react-router-dom'
// import '../css/style1.css';
import Navbar from './Navbar';
import Search from './Search';
import CountUp, { useCountUp } from 'react-countup';
export default function Div2(props) {

	const [data, setdata] = useState([]);
	const [data1, setdata1] = useState(0);
	const [noofdonor, setnoofdonor] = useState(0);
	const [stock, setstock] = useState(0);
	useEffect(() => {
       
        (async () => {
            const response = await fetch("http://localhost:5001/user0/findnumberofdonor", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        setdata(await response.json());
		if(data){
		setnoofdonor(data.length)
		}
        console.log(data);
        })();
      
      });

	  useEffect(() => {
       
        (async () => {
            const response = await fetch("http://localhost:5001/admin/fetchallbloodbank", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        setdata1(await response.json());
		var temp = 0;
		if(data1){
			for(let i = 0; i < data1.length; i++){
				//console.log(data[i]);
				if(data1[i].blood_group){
					for(let j = 0; j < data1[i].blood_group.length ; j++){
						//console.log(data1[i].blood_group[j].quantity);
						temp += data1[i].blood_group[j].quantity;
					}
				}
			}
		}
		console.log(temp);
		setstock(temp)
        console.log(data);
        })();
      
      });


	

	return (
		<>
			<section id="div2">
				<div class="container">

					<div class="row center">

						<div class="four col-md-5">
							<div class="counter-box colored1">
								{/* <i class="fa fa-thumbs-o-up"></i> */}
								<span class="counter"><CountUp start={0} end={noofdonor} delay={0} /></span>
								<p>Donors Registered</p>
							</div>
						</div>
						{/* <div class="four col-md-3">
		<div class="counter-box">
			<i class="fa fa-group"></i>
			<span class="counter">3275</span>
			<p>Registered Members</p>
		</div>
	</div> */}
						{/* <div class="four col-md-3">
		<div class="counter-box">
			<i class="fa  fa-shopping-cart"></i>
			<span class="counter"><CountUp start={0} end={100} delay={0}/></span>
			<p>Available Products</p>
		</div>
	</div> */}
						<div class="four col-md-5">
							<div class="counter-box colored2">
								{/* <i class="fa  fa-user"></i> */}
								<span class="counter"><CountUp start={0} end={stock} delay={0} /></span>
								<p>Blood Units Collected</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}