import React, { useEffect, useState } from "react";
import '../../styles/MyBooking.css'
import { getMyBooking } from "../../utils/api-utils";
import MapComponent from "./MapComponent";
import { Link, useNavigate } from "react-router-dom";
import MyBookingDeleteConfirm from "./MyBookingsDeleteConfirm";
export default function MyBooking() {
    const [bookings, setBookings] = useState([]);
    const [popUp, setPopUp] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        getMyBooking()
            .then(res => {
                setBookings(res.result.reverse());
            })
    }, [])
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const maxPage = Math.ceil(bookings.length / itemsPerPage);
    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber);
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = bookings.slice(startIndex, endIndex);
    // console.log(bookings);
    return <>
        <div className="mybookings-main">
            {currentData.length === 0 ? <h1>You haven't booked any cars</h1> : <div className="mybookings-container">
                <div className="mybookings-heading-container">
                    <h2 className="mybooking-heading">My Bookings</h2>
                    <p className="mybooking-subheading">Here you can edit and cancel your bookings</p>
                    <div className="mybooking-goback">
                        <button onClick={e => {
                            navigate('/user/carbooking')
                        }} className="goback">Take me to Car booking</button>
                    </div>
                </div>
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
                <div className="mybookings-cards-container">
                    {
                        currentData.map(booking => {
                            return <div className="my-booking-card" key={booking._id}>
                                <div className="mybooking-image-container">
                                    <img className="mybooking-image" src={`http://localhost:4000/admin/${booking.image}`} alt="car" />
                                </div>
                                <hr style={{ height: "90%", transform: "rotate(180deg)", margin: "5px" }} />
                                <div className="mybooking-cardetails-container">
                                    <div className="mybooking-cardetails">
                                        <h3>{booking.carname}</h3>
                                        <h3>{booking.carnumber}</h3>
                                        <div className="mybookings-cardetails-details">
                                            <div className="mybookings-details">
                                                <p>car details</p>
                                                <p>car details</p>
                                            </div>
                                            <div className="mybookings-details">
                                                <p>car details</p>
                                                <p>car details</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{ height: "90%", transform: "rotate(180deg)", margin: "5px" }} />
                                <div className="mybooking-destination-container">
                                    <div className="mybooking-destination">
                                        <div className="mybooking-destination-details">
                                            <div className="mybooking-origin-container">
                                                <p>Origin : </p>
                                                <h4>{booking.origin}</h4>
                                            </div>
                                            <div className="mybooking-destiny-container">
                                                <p>Destination:</p>
                                                <h4>{booking.destination}</h4>
                                            </div>
                                            <div className="mybooking-startdate-container">
                                                <p>Start Date  : </p>
                                                <h4>{booking.startdate}</h4>
                                            </div>
                                            <div className="mybooking-enddate-container">
                                                <p>End Date : </p>
                                                <h4>{booking.enddate}</h4>
                                            </div>
                                        </div>
                                        <div className="mybooking-map-container">
                                            <div className="mybooking-map">
                                                <MapComponent id={booking._id} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{ height: "90%", transform: "rotate(180deg)", margin: "5px" }} />
                                <div className="mybooking-booking-container">
                                    <div className="mybooking-booking">
                                        <p>BookingID : </p>
                                        <h4>{booking.bookingId}</h4>
                                    </div>
                                    <div className="mybooking-booking">
                                        <p>Booking Date : </p>
                                        <h4>{booking.bookingDate}</h4>
                                    </div>
                                    <div className="mybooking-booking">
                                        <p>Booking Time : </p>
                                        <h4>{booking.bookingTime}</h4>
                                    </div>
                                </div>
                                <hr style={{ height: "90%", transform: "rotate(180deg)", margin: "5px" }} />
                                <div className="mybooking-button-container">
                                    <Link to={`/user/editmybooking/${booking._id}`}>
                                        <div className="mybooking-edit-btn-container">
                                            <button className="mybooking-edit-btn">Edit</button>
                                        </div>
                                    </Link>
                                    <div className="mybooking-cancel-btn-container">
                                        <button className="mybooking-cancel-btn" onClick={e => {
                                            e.preventDefault();
                                            setPopUp(true);
                                        }}>Cancel</button>
                                        {popUp && <MyBookingDeleteConfirm id={booking._id} popUp={setPopUp} />}
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            }
        </div>
    </>
}