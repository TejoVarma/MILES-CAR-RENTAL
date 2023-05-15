import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import '../../styles/ConfirmBooking.css'
import { editMyBookingById, getMyBookingById } from "../../utils/api-utils";
import { toast } from 'react-toastify'
import MapComponent from "./MapComponent";
export default function EditBooking() {
    const navigate = useNavigate();
    const [car, setCar] = useState([]);
    const { id } = useParams();
    // console.log(id);
    function handleClick(){
        const data = {...car};
        // console.log(data);
        editMyBookingById(data,car._id)
        .then(res => {
            if(res.status === "Success")
            {
                setCar([]);
                // console.log(res);
                toast.success(`Booking was edited successful`, {
                    position: "bottom-right"
                });
                navigate('/user/mybookings');
            }
            else
            {
                toast.success(`Failed to edit the car`, {
                    position: "bottom-right"
                });
                navigate('/user/mybookings');
            }
        })
    }
    useEffect(() => {
        getMyBookingById(id)
            .then(res => {
                // console.log(res);
                setCar(res.result);
                // console.log(res.result[res.result.length-1]);
            });
            // eslint-disable-next-line
    }, []);
    // console.log(car.origin);
    // return <h1>I am from edit booking page</h1>
    // console.log(destination);
    return <>
        <div className="confirm-booking-container">
            <div className="confirm-booking-left-section">
                <div className="confirm-heading">
                    <h2>Edit Booking details</h2>
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
                        <img className="confirm-image" src={`https://miles-car-rental-node-tejo.onrender.com/admin/${car.image}`} alt="car" />
                    </div>
                </div>
                <hr style={{ width: '97%' }} />
                <div className="destination-details-container">
                    <div className="confirm-car-details">
                        <div className="confirm-carname-container">
                            <p className="confirm-carname-heading">Origin : </p>
                            <input className="confirm-carname"
                                type="text"
                                name="origin"
                                value={car.origin}
                                onChange={(e) => {
                                    setCar(data => {
                                        return {
                                            ...data,
                                            origin: e.target.value
                                        }
                                    })
                                }} />
                        </div>
                        <div className="confirm-carnumber-container">
                            <p className="confirm-carnumber-heading">Destination : </p>
                            <input className="confirm-carname"
                                type="text"
                                name="destination"
                                value={car.destination}
                                onChange={(e) => {
                                    setCar(data => {
                                        return {
                                            ...data,
                                            destination: e.target.value
                                        }
                                    })
                                }} />
                        </div>
                        <div className="confirm-carnumber-container">
                            <p className="confirm-carnumber-heading">Start Date : </p>
                            <input className="confirm-carname"
                                name="startdate"
                                type="date"
                                value={car.startdate}
                                onChange={(e) => {
                                    setCar(data => {
                                        return {
                                            ...data,
                                            startdate: e.target.value
                                        }
                                    })
                                }} />
                        </div>
                        <div className="confirm-carnumber-container">
                            <p className="confirm-carnumber-heading">End Date : </p>
                            <input className="confirm-carname"
                                name="enddate"
                                type="date"
                                value={car.enddate}
                                onChange={(e) => {
                                    setCar(data => {
                                        return {
                                            ...data,
                                            enddate: e.target.value
                                        }
                                    })
                                }} />
                        </div>
                    </div>
                    <div className="destination-map-container">
                        <div className="confirm-map" >
                            <MapComponent id={car.bookingId} />
                        </div>
                    </div>
                </div>
                <hr style={{ width: '97%' }} />
                <div className="booking-id-container">
                    <div className="confirm-car-details">
                        <div className="confirm-carname-container">
                            <p className="confirm-carname-heading">BookingID : </p>
                            <p className="confirm-carname">{car.bookingId}</p>
                        </div>
                        <div className="confirm-carnumber-container">
                            <p className="confirm-carname-heading">Booking Date : </p>
                            <p className="confirm-carname">{car.bookingDate}</p>
                        </div>
                        <div className="confirm-carnumber-container">
                            <p className="confirm-carname-heading">Booking Time : </p>
                            <p className="confirm-carname">{car.bookingTime}</p>
                        </div>
                    </div>
                </div>
                <div onClick={e=>{
                    navigate('/user/mybookings');
                }} className="confirm-booking-cancel-button-container">
                    <button className="confirm-booking-cancel-button">Cancel</button>
                </div>
            </div>
            <div className="confirm-booking-right-section">
                <div className="confirm-heading">
                    <h2>Payment Details</h2>
                </div>
                <div className="confirm-payment-information-container">
                    <div className="payment-price-per-km">
                        <p className="confirm-carname-heading">Price per KM : </p>
                        <p className="confirm-carname">{car.pricePerKm} Rs/Km</p>
                    </div>
                    <div className="payment-price-per-km">
                        <p className="confirm-carname-heading">Pricing : </p>
                        <p className="confirm-carname">{car.pricing} Rs</p>
                    </div>
                    <div className="payment-price-per-km">
                        <p className="confirm-carname-heading">Tax Charges : </p>
                        <p className="confirm-carname">{car.taxes} Rs</p>
                    </div>
                </div>
                <hr style={{ width: '97%' }} />
                <div className="payment-subtotal-container">
                    <h2 className="payment-subtotal-heading">Sub Total</h2>
                    <h2 className="payment-subtotal">{car.subTotal} Rs</h2>
                </div>

                <div className="confirm-booking-button-container">
                    <button onClick={handleClick} className="confirm-booking-button">Save</button>
                </div>
            </div>
        </div>
    </>
}