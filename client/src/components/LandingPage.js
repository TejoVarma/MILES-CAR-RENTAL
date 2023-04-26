import React from "react";
import '../styles/Landing.css'
export default function LandingPage() {
    return <div className="landing-page">
        <div className="home-image">
            <div className="background-matte">
                <div className="description-section">
                    <h1 className="heading">Rent Cars In Your Place...</h1>
                    <div className="paragraph">
                        <p>Miles Car Rental is the go-to choice for car rental needs in your place. We offer a wide selection of cars for hire, from economy to luxury, with competitive rates and top-notch customer service. Whether you need a car for a day, a week or longer, Miles has you covered. <br /> <span className="easy">Book with us for an easy and stress-free car rental experience.</span></p>
                    </div>
                    <div className="user-login-links">
                        <div className="user-links-section">
                            <p className="existing-user">If you are a member of Miles family,</p>
                            <button className="user-login">LogIn</button>
                            <p className="new-user">If you are a new user then join us...</p>
                            <button className="user-signup">SignUp</button>
                        </div>
                    </div>
                </div>
                <div className="admin-section">
                    <div className="admin-login-links">
                        <div className="admin-links-section">
                            <p className="existing-admin">If you are a collaborator of Miles family,</p>
                            <button className="admin-login">Host LogIn</button>
                            <p className="new-admin">If you have a car and want to grow with us...then collab with us</p>
                            <button className="admin-signup">Host SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="second-section">
            <div>
                Let's go
            </div>
        </div>
    </div>
}