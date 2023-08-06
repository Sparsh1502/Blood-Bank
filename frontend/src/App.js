import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Signup from './component/Signup';
import Signin from './component/Signin';
import BloodBankAdd from './component/BloodBankAdd';
import Search  from './component/Search'; 
import Header  from './component/header';
import Article from './component/Article';
import AdminNavbar from './component/AdminNavbar'
import BloodBanks from './component/Bloodbanks';
import Details  from './component/Details';
import Div1 from './component/Div1';
import Div2 from './component/Div2'
import './index.css';
import Footer  from './component/footer';
import UserApp from './component/UserApp';
import LabApp from './component/LabApp'
import LabProfile from './component/LabProfile';
import LabProfile1 from './component/LabProfile1';
import LabDonor from './component/LabDonor';
import Lab from './component/hi';
import DonorProfile from './component/DonorProfile';
import AdminDonor from './component/AdminDonor';
import AdminReceiver from './component/AdminReceiver'
import BloodbankApplication from './component/BloodBankApplication';
import AdminShowApp from './component/AdminShowApp';
import AdminAppDetails from './component/AdminAppDetails';
import ContactUs from './component/contactus';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import LabManageDonor from './component/LabManageDonor';
import LabReceiver from './component/LabReceiver';
import DonorRoute from './component/DonorRoute';
import PrivateRoute from './component/PrivateRoute';
import ReceiverRoute from './component/LabRoute';
import LabRoute from './component/LabRoute';
import Details1 from './component/Details1';
import AdminRoute from './component/AdminRoute';
function App(){
  return(
    <BrowserRouter>
      <Routes>
      <Route path = "ContactUS" element = {<ContactUs/>} />
      <Route path = "AdminAppDetails" element = {<AdminRoute><AdminAppDetails/></AdminRoute>} />
      <Route path = "AdminShowApp" element = {<AdminRoute><AdminShowApp/></AdminRoute>} />
      <Route path = "BloodBankApplication" element = {<PrivateRoute><BloodbankApplication/></PrivateRoute>} />
      <Route path = "AdminDonor" element = {<AdminDonor/>} />
      <Route path = "AdminReceiver" element = {<AdminReceiver/>} />
      <Route path = "LabManageDonor" element = {<LabRoute><LabManageDonor/></LabRoute>} />
      <Route path = "/DonorProfile" element = {<DonorRoute><DonorProfile/></DonorRoute>} />
      <Route path = "/lab" element = {<Lab/>} />
      <Route path = "/LabDonor" element = {<LabRoute><LabDonor/></LabRoute>} />
      <Route path = "/LabReceiver" element = {<LabRoute><LabReceiver/></LabRoute>} />
      <Route path = "/LabProfile1" element = {<LabRoute><LabProfile1/></LabRoute>} />
      <Route path = "/LabProfile" element = {<LabRoute><LabProfile/></LabRoute>} />
      <Route path = "/LabApp" element = {<LabRoute><LabApp/></LabRoute>} />
      <Route path = "/UserApp" element = {<ReceiverRoute><UserApp/></ReceiverRoute>} />
        <Route path = "/Div1" element = {<Div1/>} />
        <Route path = "/Div2" element = {<Div2/>} />
        <Route path = "/Details" element = {<LabRoute><Details/></LabRoute>} />
        <Route path = "/Details1" element = {<AdminRoute><Details1/></AdminRoute>} />
        <Route path = "/Footer" element = {<Footer/>} />
        <Route path = "/Bloodbanks" element = {<AdminRoute><BloodBanks/></AdminRoute>} />
        <Route path = "/Admin" element = {<AdminNavbar/>} />
        <Route path = "/article" element = {<Article/>} />
        <Route path = "/" element = {<Header/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path = "/Navbar" element= {<Navbar/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/addbloodbank" element = {<BloodBankAdd/>} />
        <Route path = "/search" element = {<Search/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App