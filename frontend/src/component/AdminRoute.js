import React from 'react';
import {  Navigate } from 'react-router-dom';
import { isAuthenticated } from "./index";
import Swal from 'sweetalert2'

const AdminRoute = ({ children}) => {
  
      
  if (isAuthenticated() && isAuthenticated().user.type === "admin" ) {
    return children
  }
  else{
    Swal.fire('Oops', 'You must be logged in as a Admin', 'error').then(result => {
      window.location.href = '/'
      
  })
  }
 // return <Navigate to="/" />
}

export default AdminRoute;