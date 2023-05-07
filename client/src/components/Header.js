import React from 'react';
import '../styles/Header.css'
export default function Header() {
    return <div className='header'>
        <div className='logo-company-container'>
            <img className='logo' src='./logo.jpeg' alt='logo' />
            <h2 className='company-name'>Miles:Car Rental</h2>
        </div>
        <div className='right-header-home'>
            <img className='social-logos fb' src='./fb-logo.png' alt='fb-logo' />
            <img className='social-logos insta' src='./insta-logo.png' alt='insta-logo' />
            <img className='social-logos twitter' src='./twitter-logo.png' alt='twitter-logo' />
        </div>
    </div>
}