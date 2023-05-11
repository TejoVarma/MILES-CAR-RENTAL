import React from 'react';
import '../styles/Header.css'
import { useNavigate } from 'react-router-dom';
export default function Header() {
    const navigate = useNavigate();
    return <div className='header'>
        <div className='logo-company-container'>
            <img onClick={(e=>{
                    navigate('/')
                })} className='logo' src='./logo.jpeg' alt='logo' />
            <h2 onClick={(e=>{
                    navigate('/')
                })} className='company-name'>Miles:Car Rental</h2>
        </div>
        <div className='right-header-home'>
            <img className='social-logos fb' src='./fb-logo.png' alt='fb-logo' />
            <img className='social-logos insta' src='./insta-logo.png' alt='insta-logo' />
            <img className='social-logos twitter' src='./twitter-logo.png' alt='twitter-logo' />
        </div>
    </div>
}