import React from 'react';
import '../styles/Header.css'
export default function Header(){
    let adminToken = null;
    let userToken = null;
    return <div className='header'>
            <div className='logo-company-container'>
                <img className='logo' src='./logo.jpeg' alt='logo'/>
                <h2 className='company-name'>Miles:Car Rental</h2>
            </div>
            {userToken ? <div className='right-header-user'>
                    <div className='links'>My booking</div>
                    <div className='links'>Logout</div>
                </div> :
                adminToken ? <div className='right-header-admin'>
                        <div className='links'>My Uploads</div>
                        <div className='links'>Logout</div>
                    </div> : <div className='right-header-home'>
                        <img className='social-logos fb' src='./fb-logo.png' alt='fb-logo'/>
                        <img className='social-logos insta' src='./insta-logo.png' alt='insta-logo'/>
                        <img className='social-logos twitter' src='./twitter-logo.png' alt='twitter-logo'/>
                    </div>
            }
    </div>
}