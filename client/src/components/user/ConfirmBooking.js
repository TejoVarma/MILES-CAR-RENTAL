import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import '../../styles/ConfirmBooking.css'
import { getBookingDetails, getUserCarById, saveToMyBookings } from "../../utils/api-utils";
import MapComponent from "./MapComponent";
import {toast} from 'react-toastify'
export default function ConfirmBooking() {
    const navigate = useNavigate();
    const [car, setCar] = useState({
        carname: "",
        type: "",
        model: "",
        mileage: "",
        perkm: "",
        availablefrom: "",
        availabletill: "",
        description: "",
        cardetails: "",
        details: "",
        image: "",
        carId :""
    });
    const [destination, setDestination] = useState([]);
    const { id } = useParams();
    const currentDate = new Date().toLocaleDateString(); // get current date in format MM/DD/YYYY
    const currentTime = new Date().toLocaleTimeString();
    const pricePerKm = car.perkm;
    const pricing = car.perkm * 400;
    const taxes = car.perkm * 400 * 18/100;
    const subTotal = car.perkm * 400 + car.perkm * 400 * 18/100;
    function handleClick(){
        const data = {
            origin : destination.origin,
            destination : destination.destination,
            startdate : destination.startdate,
            enddate : destination.enddate,
            carname : car.carname,
            carnumber : 'MH 01 AI 1234',
            image : car.image,
            bookingId : destination._id,
            bookingTime : currentTime,
            bookingDate : currentDate,
            pricePerKm  : pricePerKm,
            pricing : pricing,
            taxes : taxes,
            subTotal : subTotal,
            carId : car.carId
        };
        // console.log(data);
        saveToMyBookings(data)
        .then(res => {
            if(res.status === "Success")
            {
                // console.log(res);
                toast.success(`Booking was successful`, {
                    position: "bottom-right"
                });
                navigate('/user/mybookings');
            }
            else if(res.status === "Present")
            {
                toast.error(`Already car was booked`, {
                    position: "bottom-right"
                });
                navigate('/user/carbooking');
            }
            else
            {
                toast.success(`Failed to book the car`, {
                    position: "bottom-right"
                });
                navigate('/user/carbooking');
            }
        })
    }
    useEffect(() => {
        getUserCarById(id)
            .then(res => {
                setCar({
                    carname: res.result[res.result.length - 1].carname,
                    type: res.result[res.result.length - 1].type,
                    model: res.result[res.result.length - 1].model,
                    mileage: res.result[res.result.length - 1].mileage,
                    perkm: res.result[res.result.length - 1].perkm,
                    availablefrom: res.result[res.result.length - 1].availablefrom,
                    availabletill: res.result[res.result.length - 1].availabletill,
                    description: res.result[res.result.length - 1].description,
                    cardetails: res.result[res.result.length - 1].cardetails,
                    details: res.result[res.result.length - 1].details,
                    image: res.result[res.result.length - 1].image,
                    carId : res.result[res.result.length - 1].carId
                })
                // console.log(res.result[res.result.length-1]);
            });
        getBookingDetails()
            .then(res => setDestination(res.result[res.result.length - 1]));
    }, [id]);
    // console.log(car.carId);
    // console.log(destination);
    return <>
        <div className="confirm-booking-container">
            <div className="confirm-booking-left-section">
                <div className="confirm-heading">
                    <h2>Booking details</h2>
                </div>
                <div className="confirm-car-details-container">
                    <div className="confirm-car-details">
                        <div className="confirm-carname-container">
                            <p className="confirm-carname-heading">Car Name : </p>
                            <h3 className="confirm-carname">{car.carname}</h3>
                        </div>
                        <div className="confirm-carnumber-container">
                            <p className="confirm-carnumber-heading">Car Number : </p>
                            <h3 className="confirm-carname">MH 01 AI 1234</h3>
                        </div>
                    </div>
                    <div className="confirm-car-image-container">
                        <img className="confirm-image" src={`http://localhost:4000/admin/${car.image}`} alt="car" />
                    </div>
                </div>
                <hr style={{ width: '97%' }} />
                <div className="destination-details-container">
                    <div className="confirm-car-details">
                        <div className="confirm-carname-container">
                            <p className="confirm-carname-heading">Origin : </p>
                            <p className="confirm-carname">{destination.origin}</p>
                        </div>
                        <div className="confirm-carnumber-container">
                            <p className="confirm-carnumber-heading">Destination : </p>
                            <p className="confirm-carname">{destination.destination}</p>
                        </div>
                        <div className="confirm-carnumber-container">
                            <p className="confirm-carnumber-heading">Start Date : </p>
                            <p className="confirm-carname">{destination.startdate}</p>
                        </div>
                        <div className="confirm-carnumber-container">
                            <p className="confirm-carnumber-heading">End Date : </p>
                            <p className="confirm-carname">{destination.enddate}</p>
                        </div>
                    </div>
                    <div className="destination-map-container">
                        <div className="confirm-map" >
                            <MapComponent id={destination._id}/>
                        </div>
                    </div>
                </div>
                <hr style={{ width: '97%' }} />
                <div className="booking-id-container">
                    <div className="confirm-car-details">
                        <div className="confirm-carname-container">
                            <p className="confirm-carname-heading">BookingID : </p>
                            <p className="confirm-carname">{destination._id}</p>
                        </div>
                        <div className="confirm-carnumber-container">
                            <p className="confirm-carname-heading">Booking Date : </p>
                            <p className="confirm-carname">{currentDate}</p>
                        </div>
                        <div className="confirm-carnumber-container">
                            <p className="confirm-carname-heading">Booking Time : </p>
                            <p className="confirm-carname">{currentTime}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="confirm-booking-right-section">
                <div className="confirm-heading">
                    <h2>Payment Details</h2>
                </div>
                <div className="confirm-payment-information-container">
                    <div className="payment-price-per-km">
                        <p className="confirm-carname-heading">Price per KM : </p>
                        <p className="confirm-carname">{pricePerKm} Rs/Km</p>
                    </div>
                    <div className="payment-price-per-km">
                        <p className="confirm-carname-heading">Pricing : </p>
                        <p className="confirm-carname">{pricing} Rs</p>
                    </div>
                    <div className="payment-price-per-km">
                        <p className="confirm-carname-heading">Tax Charges : </p>
                        <p className="confirm-carname">{taxes} Rs</p>
                    </div>
                </div>
                <hr style={{ width: '97%' }} />
                <div className="payment-subtotal-container">
                    <h2 className="payment-subtotal-heading">Sub Total</h2>
                    <h2 className="payment-subtotal">{subTotal} Rs</h2>
                </div>

                <div className="confirm-booking-button-container">
                    <button onClick={handleClick} className="confirm-booking-button">Proceed</button>
                </div>
            </div>
        </div>
    </>
}