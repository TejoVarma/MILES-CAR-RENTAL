import React from 'react';
import '../styles/Header.css'
import { toast } from "react-toastify";
import { Outlet, useNavigate } from 'react-router-dom';
import { deleteCurrentUser, deleteToken } from '../utils/storage-utils';
export default function AdminHeader() {
    const navigate = useNavigate();
    return <>
        <div className='header'>
            <div className='logo-company-container'>
                <img onClick={(e=>{
                    navigate('/admin/cars')
                })} className='logo' src='./../../logo.jpeg' alt='logo' />
                <h2 onClick={(e=>{
                    navigate('/admin/cars')
                })} className='company-name'>Miles:Car Rental</h2>
            </div>
            <div className='right-header-admin'>
                <div onClick={e=>{
                    deleteToken();
                    deleteCurrentUser();
                    navigate('/getstarted');
                    toast.success(`Successfully logged out`, {
                        position: "bottom-right"
                    })
                }} className='links'>Logout</div>
            </div>
        </div>
        <div className="outlet-container">
            <Outlet />
        </div>
    </>
}