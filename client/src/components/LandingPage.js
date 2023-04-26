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
        <div className="testimonals-section">
            <div className="testimonal">
                <p className="testimonal-para">I was very pleased with the service provided by Miles Car Rental in Hyderabad, TG. The staff were friendly, the car was in perfect condition, and the prices were very competitive. I will definitely use Miles again in the future and recommend them to my friends and family.</p>
                <p className="testimonal-name">-Siri</p>
            </div>
        </div>
        <div className="services">
            <div className="service">
                <div>
                    <img src="./service1.jpeg" alt="service1"/>
                </div>
                <div>
                    <p></p>
                </div>
            </div>
            <div className="service">
                service2
            </div>
            <div className="service">
                service3
            </div>
        </div>
    </div>
}