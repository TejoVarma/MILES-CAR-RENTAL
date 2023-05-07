import React from 'react';
import '../../styles/Header.css'
export default function AdminHeader() {
    return <div className='header'>
        <div className='logo-company-container'>
            <img className='logo' src='./logo.jpeg' alt='logo' />
            <h2 className='company-name'>Miles:Car Rental</h2>
        </div>
        <div className='right-header-admin'>
            <div className='links'>My Uploads</div>
            <div className='links'>Logout</div>
        </div>
    </div>
}