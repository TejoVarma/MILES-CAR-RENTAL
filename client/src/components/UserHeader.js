import React from 'react';
import '../styles/Header.css'
import { Outlet, useNavigate } from 'react-router-dom';
import { deleteCurrentUser, deleteToken } from '../utils/storage-utils';
export default function UserHeader() {
    const navigate = useNavigate();
    return <>
        <div className='header'>
            <div className='logo-company-container'>
                <img className='logo' src='./../logo.jpeg' alt='logo' />
                <h2 className='company-name'>Miles:Car Rental</h2>
            </div>
            <div className='right-header-user'>
                <div className='links'>My booking</div>
                <div onClick={e=>{
                    deleteCurrentUser();
                    deleteToken();
                    navigate('/getstarted');
                }} className='links'>Logout</div>
            </div>
        </div>
        <div className="outlet-container">
            <Outlet />
        </div>
    </>
}