import React from 'react';
import '../styles/Header.css'
export default function Header(){
    let authToken = null;
    let userToken = null;
    return <div className='header'>
            <div className='logo-company-container'>
                <img className='logo' src='./logo.jpeg' alt='logo'/>
                <h2 className='company-name'>Miles:Car Rental</h2>
            </div>
            {userToken ? <div className='right-header'>
                    <div>My booking</div>
                    <div>Logout</div>
                </div> :
                authToken ? <div className='right-header'>
                        <div>My Uploads</div>
                        <div>Logout</div>
                    </div> : <div className='right-header'>
                        <img className='social-logos fb' src='./fb-logo.png' alt='fb-logo'/>
                        <img className='social-logos insta' src='./insta-logo.png' alt='insta-logo'/>
                        <img className='social-logos twitter' src='./twitter-logo.png' alt='twitter-logo'/>
                    </div>
            }
    </div>
}