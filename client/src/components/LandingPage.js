import React from "react";
import '../styles/Landing.css'
import { Link } from "react-router-dom";

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
                        <Link to={'/getstarted'}>
                        <button className="landing-button">Get Started....</button>
                        </Link>
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
        <div className="contact-us">
            <div className="contact-us-description-container">
                <div className="contact-us-description">
                    <h2 className="contact-us-heading">
                        Miles:Car-Rental Contact Form
                    </h2>
                    <p className="contact-us-para">
                        Let us know how we can help you with your car rental needs. Fill out our contact form and we'll get back to you shortly.
                    </p>
                </div>
            </div>
            <div className="contact-us-form-container">
                <div className="contact-us-form">
                    <form>
                        <div className="name-email-container">
                            <div className="name">
                                <label className="labels" htmlFor="name">Name</label>
                                <input id="name" name="name" type='text' required/>
                            </div>
                            <div className="email">
                                <label className="labels" htmlFor="email">Email</label>
                                <input id="email" name="email" type='email' required/>
                            </div>
                        </div>
                        <div className="message">
                            <label className="labels" htmlFor="message">Description</label>
                            <textarea rows="5" cols="60" name="message" id="message" required></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="about-us">
            <div className="about-us-description-container">
                <div className="about-us-description">
                    <h1 className="about-us-heading">About Us</h1>
                    <p className="about-us-para">Miles is a car rental business operating in over 160+ countries. We provide short and long-term car rental solutions to make traveling a breeze. We have a variety of cars ranging from luxury to economy, so you are sure to find something that suits your needs perfectly. Our rates are competitive and we offer excellent customer service. We are dedicated to providing a convenient and stress-free experience to our customers.We offer a wide selection of cars for rent, from sports cars to family cars. We also offer special packages for business trips, wedding car rentals, and more. Our knowledgeable and friendly staff are always on hand to answer any questions you may have and to help you make the best decision for your travel needs. We strive to make the car rental process as simple and hassle-free as possible. We look forward to helping you find the perfect car for your journey.</p>
                </div>
            </div>
        </div>
    </div>
}