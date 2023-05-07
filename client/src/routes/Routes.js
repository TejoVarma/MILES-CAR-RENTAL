import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Login from "../components/login/Login";
import Admin from "../components/admin/Admin";
import User from "../components/user/User";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Routers() {
    return <BrowserRouter>
        <ToastContainer/>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/getstarted" element={<Login/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/user" element={<User/>}/>
        </Routes>
    </BrowserRouter>
}