import Loader from './Loader';
import Swal from 'sweetalert2'

export const isAuthenticated = () => {
    console.log('hello');
    const token = localStorage.getItem('jwt');
    console.log(token);
    if(typeof window == 'undefined')
    {
        return false;
    }

    if(localStorage.getItem('jwt'))
    {
        return JSON.parse(localStorage.getItem('jwt'));
    } else {
        return false;
    }
}

export const signout = (next) => {
   // console.log('hello');
    if(typeof window !== 'undefined')
    {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('jwt');
        next();
        return fetch('http://localhost:5001/api/logout', {
            method: "POST"
        })
        .then(response => {
            console.log("signout", response);
        })
        .catch(err => console.log(err));
    }
};