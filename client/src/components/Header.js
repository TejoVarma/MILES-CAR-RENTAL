import React from 'react';
import '../styles/Header.css'
import { Link, useNavigate } from 'react-router-dom';
export default function Header() {
    const navigate = useNavigate();
    return <div className='header'>
        <div className='logo-company-container'>
            <img onClick={(e => {
                navigate('/')
            })} className='logo' src='./logo.jpeg' alt='logo' />
            <h2 onClick={(e => {
                navigate('/')
            })} className='company-name'>Miles:Car Rental</h2>
        </div>
        <div className='right-header-home'>
            <Link to={'/getstarted'}>
                <p className='home-login'>LogIn</p>
            </Link>
        </div>
    </div>
}