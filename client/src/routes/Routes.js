import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Login from "../components/login/Login";

export default function Routers() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/getstarted" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
}