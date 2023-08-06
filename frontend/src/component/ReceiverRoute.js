import React from 'react';
import { Route,Routes, Navigate } from 'react-router-dom';
import { isAuthenticated } from "./index";
import Swal from 'sweetalert2'
const ReceiverRoute = ({ children}) => {
  
      
    if (isAuthenticated() ) {
      return children
    }
    else{
      
    Swal.fire('Oops', 'You must be logged in as a Receiver', 'error').then(result => {
      window.location.href = '/'
      
  })
    }
      
   // return <Navigate to="/" />
  }
  
  export default ReceiverRoute;