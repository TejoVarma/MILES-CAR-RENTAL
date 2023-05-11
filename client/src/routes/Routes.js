import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Login from "../components/login/Login";
import Admin from "../components/admin/Admin";
import User from "../components/user/User";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AdminHeader from "../components/AdminHeader";
import UserHeader from "../components/UserHeader";
import AdminAddCar from "../components/admin/AdminAddCar";
import AdminEditCar from "../components/admin/AdminEditCar";

export default function Routers() {
    return <BrowserRouter>
        <ToastContainer/>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/getstarted" element={<Login/>}/>
            <Route path="/admin" element={<AdminHeader/>}>
                <Route path="cars" element={<Admin/>}/>
                <Route path="addcar" element = {<AdminAddCar/>}/>
                <Route path="edit/:id" element = {<AdminEditCar/>}/>
            </Route>
            <Route path="/user" element={<UserHeader/>}>
                <Route path="check-availability" element={<User/>}/>    
            </Route>
        </Routes>
    </BrowserRouter>
}