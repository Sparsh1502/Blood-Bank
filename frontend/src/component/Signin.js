import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate, json } from 'react-router-dom'
import '../css/style.css';
import Navbar from './Navbar';
import Loader from './Loader';
import Swal from 'sweetalert2'


export default function Login(props) {
    const Navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
    });
    const [loading, setLoading] = useState(false)
    const [err,seterr]=useState("");
    const { email, password, error } = values;
 

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value })
    };

    const clickSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const response = await fetch('http://localhost:5001/api/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({ email: values.email, password: values.password })
            })

            setLoading(false)
            // const showError = () => {
            //     return (<div className="alert alert-danger" style={{display: 'error' ? '': 'none'}}>
            //         {error}
            //     </div>
            //     )
            // }
           
            const json = await response.json();
            console.log(json);
            if (response.ok) {
                console.log(json);
                localStorage.setItem('jwt', JSON.stringify(json));
                //localStorage.setItem('userType', json.userType);
                localStorage.setItem('email', json.email);
                
                Swal.fire('Congrats', 'You are signin', 'success').then(result => {
                    window.location.href = '/'
                })
            }
            else
            {
                setValues({...values, error: json.msg})
                Swal.fire('Oops', json.msg, 'error')
                console.log(err);
            }

        }
        catch (error) {
            setValues({...values, error: json.msg})
            Swal.fire('Oops', values.error, 'error')
        }

    }
    const showError = () => {
        return (<div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
          
        </div>
        )
    }
    return (
        <>
            <Navbar />
            
            <section id="login">
                <div class="title">
                    <h2>Login</h2>
                    <hr class="line" />
                </div>
                <div className="container">
                {loading && <Loader />}
                    <img src={require('../imgs/logo.png')} alt="" />
                   
                    <form onSubmit={clickSubmit}>
                        {/* //<input className="username" type="Username" name = "email" placeholder="Username" required onChange={onChange('email')}/> */}
                        <input onChange={handleChange('email')} type="email" className="username" placeholder="Email" value={email} />
                        <input onChange={handleChange('password')} type="password" className="password" placeholder="Password" value={password} />
                        {/* <input className="check" type="checkbox" />Remember me */}
                        {/* <a href="#">Forget Password ?</a><br /> */}
                        <div className="reg-group">
                            {/* <button onClick={clickSubmit} className="btn btn-primary">Login</button> */}
                            <button type="submit" style={{ backgroundColor: "rgb(51, 58, 65)" }}>Sign in</button>
                            {/* <button onClick={clickSubmit} style={{backgroundColor: "darkred"}}>Login</button> */}
                            {/* <button style={{backgroundColor: "rgb(51, 58, 65)" }}>Make new account</button> */}
                        </div>
                        
                    </form>
                </div>
                
            </section>
        </>
    )
}