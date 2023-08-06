import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import '../css/style.css';
import Navbar from './Navbar';
import Swal from 'sweetalert2'
export default function Signup(props) {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        birthdate : '',
        blood_group : '',
        city: '',
        gender : '',
        error: '',
        success: false
    });

    const {name, email, password, birthdate, blood_group, city, gender, success, error} = values;

    const handleChange = name => e => {
        console.log(e.target.value);
        setValues({...values, error: false, [name]: e.target.value})
    };

    const clickSubmit = async (e) => {
        e.preventDefault();
        setValues({...values, error: false});
        const response = await fetch('http://localhost:5001/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // "fullname":"Bhavin Sonagara",
                // "email" : "123@xyz.com",
                // "password" : "Zinal@17",
                // "bloodgroup" : "A+",
                // "gender" : "male",
                // "dateOfBirth" : "1970/1/1"
                 body: JSON.stringify({ fullname: values.name, email: values.email, password: values.password, bloodgroup: values.blood_group, gender: values.gender, dateOfBirth : values.birthdate, city : values.city })
        })
            const json = await response.json();
            console.log(json);

            if (response.ok) {
                console.log(json);
                // localStorage.setItem('jwt', JSON.stringify(json));
                // //localStorage.setItem('userType', json.userType);
                // localStorage.setItem('email', json.email);
                
                Swal.fire('Congrats', 'You Registered Successfully', 'success').then(result => {
                    window.location.href = '/Signin'
                })
            }
            else
            {
                setValues({...values, error: json.msg})
                Swal.fire('Oops', json.error, 'error')
               // console.log(err);
            }
        // signup({name, email, password})
        // .then(data => {
        //     if(data.error)
        //     {
        //         setValues({...values, error: data.error, success: false})
        //     }
        //     else
        //     {
        //         setValues({...values, name: "", email: "", password: "", error: "", success: true});
        //     }
        // })

    }
//     const [, setSelected] = useState('');

//   //const [value, setValue] = useState("default");
//   const handleChange1 = (e) => {
//     setSelected(e.target.value);
//   };
    return (

        
        <>
        <Navbar/>
        <div class="title">
                    <h2>Register</h2>
                    <hr class="line" />
                </div>
        <section id="sign-up">
            <div class="container">
                <img src = {require('../imgs/logo.png')} alt="" />
   
                <form action="submit">
                   {/* // <label className="text-muted">Name</label> */}
                   {/* <input
        type="text"
        //onChange={(e) => console.log(e.target.value)}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
      /> */}
      
                    <input onChange={handleChange('name')} type="name" placeholder="Name" required value={name}/>
                    <input onChange={handleChange('email')} type="email" placeholder="Email" required value={email} />
                    <input onChange={handleChange('password')} type="password" placeholder='Password' required value={password} />
                    <input onChange={handleChange('birthdate')} type="text" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} name="bday" placeholder="Birth date" value={birthdate} />
                    <select value={blood_group} onChange = {handleChange('blood_group')} >
                        <option value="" disabled = {true}>Blood Type</option>
                        <option value="a+">a+</option>
                        <option value="a-">a-</option>
                        <option value="b+">b+</option>
                        <option value="b-">b-</option>
                        <option value="o+">o+</option>
                        <option value="o-">o-</option>
                        <option value="ab+">ab+</option>
                        <option value="ab-">ab-</option>
                    </select>
                    <select value={city} onChange={handleChange('city')} >
                        <option value="" disabled = {true}>City</option>
                        <option value="nadiad">Nadiad</option>
                        <option value="anand">Anand</option>
                        <option value="dwarka">Dwarka</option>
                        <option value="vadodara">Vadodara</option>
                    </select>
                    <select value={gender} onChange={handleChange('gender')} >
                        <option value="" disabled = {true}>Gender</option>
                        <option value="male">Male</option>
                        <option value="fenale">Female</option>
                        <option value="other">Other</option>
                    </select>
                    {/* <select name="Gov" id="Gov" required="">
                        <option value="Governorate" disabled>Governorate</option>
                        <option value="A">Alexandria</option>
                        <option value="B">Cairo</option>
                        <option value="O">Giza</option>
                        <option value="AB+">Fayoum</option>
                    </select>  */}
                    
       
                    <div class="reg-group">
                        {/* <input class="check" type="checkbox" required="" style={{ height: "auto", display: "inline", margin: "0 auto" }} />Agree on terms and conditions<br /> */}
                        <button onClick={clickSubmit} class="submit" type="submit" style={{ backgroundColor: "rgb(51, 58, 65)" }}>Submit</button>
                    </div>
                </form>
            </div>
        </section>
        </>

    )
}