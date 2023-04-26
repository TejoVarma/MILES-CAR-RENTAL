import React from 'react';
import '../styles/Footer.css'
export default function Footer() {
    return <div className='footer'>
        <div className='left-footer'>
            <h1>Miles:Car Rental</h1>
        </div>
        <div className='right-footer'>
            <div className='connect'>Connect Us, if any queries</div>
            <img className='social-logos-footer' src='./fb-logo.png' alt='fb-logo' />
            <img className='social-logos-footer' src='./insta-logo.png' alt='insta-logo' />
            <img className='social-logos-footer' src='./twitter-logo.png' alt='twitter-logo' />
        </div>
    </div>
}