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
                    <div className="landing-button-container">
                        <button className="landing-button">Get Started....</button>
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
                <div className="service-image-container">
                    <img className="service-image" src="./service1.jpeg" alt="service1" />
                </div>
                <div className="service-description">
                    <p className="service-heading">One Way Rental</p>
                    <p className="service-para">Allows customers to pick up a vehicle at one location and drop it off at another.</p>
                </div>
            </div>
            <div className="service">
                <div className="service-description">
                    <p className="service-heading">Long Term Rental</p>
                    <p className="service-para">Offers longer term car rentals, typically for 30 days or more.</p>
                </div>
                <div className="service-image-container">
                    <img className="service-image" src="./service2.jpeg" alt="service1" />
                </div>
            </div>
            <div className="service">
                <div className="service">
                    <div className="service-image-container">
                        <img className="service-image" src="./service3.jpeg" alt="service1" />
                    </div>
                    <div className="service-description">
                        <p className="service-heading">Luxury Rental</p>
                        <p className="service-para">Provides customers with access to luxury vehicles, such as high end SUVs and sports cars.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}