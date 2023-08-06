import React from 'react';
import {  Navigate } from 'react-router-dom';
import { isAuthenticated } from "./index";
import Swal from 'sweetalert2'
const DonorRoute = ({ children}) => {
  
      
  if (isAuthenticated() && isAuthenticated().user.type === "donor" ) {
    return children
  }
  else
  {
    Swal.fire('Oops', 'You must be logged in as a donor', 'error').then(result => {
      window.location.href = '/'
      //<Navigate to="/" />
  })
  }
  //return <Navigate to="/" />
}

export default DonorRoute;