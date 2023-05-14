import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { getBookingDetails, getUserCars } from "../../utils/api-utils";
import '../../styles/Booking.css'
import UserCar from "./UserCar";
export default function Booking() {
    const navigate = useNavigate();
    const [cars, setCars] = useState([]);
    const [booking, setBooking] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const maxPage = Math.ceil(cars.length / itemsPerPage);
    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber);
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = cars.slice(startIndex, endIndex);
    useEffect(() => {
        getBookingDetails()
            .then(res => {
                if (res.status === 'Success') {
                    setBooking(res.result[res.result.length - 1]);
                }
            })
    }, []);
    useEffect(()=>{
        getUserCars()
        .then(res=>setCars(res.result));
    })
    return <>
        <div className="destination-bar">
            <div className="destination-container">
                {booking.origin} ---&gt;{booking.destination} --&gt;{" "}
                {booking.startdate} - {booking.enddate}
            </div>
            <div className="modify-btn-container">
                <button
                    className="modify-btn"
                    onClick={() => {
                        navigate("/user/modify");
                    }}
                >
                    Modify
                </button>
            </div>
        </div>
        <div className="filter-bar-section">
            <div className="filter-bar">
                <div className="field-container-booking">
                    <label className="label-booking-user">Car-Type</label>
                    <select className="drop-down-user">
                        <option value="all">All</option>
                        <option value="xuv">XUV</option>
                        <option value="suv">SUV</option>
                        <option value="sedan">Sedan</option>
                    </select>
                </div>
                <div className="field-container-booking">
                    <label className="label-booking-user">Seating</label>
                    <select className="drop-down-user">
                        <option value="4">4 persons</option>
                        <option value="5">5 persons</option>
                        <option value="6">6 persons</option>
                        <option value="7">7 persons</option>
                    </select>
                </div>
                <div className="field-container-booking">
                    <label className="label-booking-user">Mileage</label>
                    <select className="drop-down-user">
                        <option value="0-5">0-5 KM/L</option>
                        <option value="6-10">6-10 KM/L</option>
                        <option value="11-15">11-15 KM/L</option>
                        <option value=">15">15+ KM/L</option>
                    </select>
                </div>
                <div className="field-container-booking">
                    <label className="label-booking-user">Price</label>
                    <select className="drop-down-user">
                        <option value="15-25">15-25 RS/KM</option>
                        <option value="26-50">26-50 RS/KM</option>
                        <option value="51-100">51-100 RS/KM</option>
                        <option value=">100">100+ RS/KM</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="user-data-container">
            <div>
                <div className="pagination-admin">
                    <div className="previous-btn-container">
                        <button className="previous-btn"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                    </div>
                    <div className="next-btn-container">
                        <button className="next-btn"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === maxPage}
                        >
                            Next
                        </button>
                    </div>
                </div>
                <div className="car-cards-container-admin car-cards-container-user">
                    {
                        currentData.map(car => {
                            return <UserCar key={car._id} car={car} />
                        })
                    }
                </div>
            </div>
        </div>
    </>
}