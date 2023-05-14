import React from "react";
import { Link } from "react-router-dom";

export default function UserCar({ car }) {
    const { carname, perkm, image } = car;
    return <div className="card-container-admin">
            <Link to={`/admin/edit/${car._id}`}>
                <section className="image-container-admin">
                    <img className="image-admin" src={`http://localhost:4000/admin/${image}`} alt="car"/>
                </section>
            </Link>
            <footer className="card-footer-admin">
                <section className="persons-container-admin">
                    <p className="persons-admin">5 persons</p>
                </section>
                <section className="description-admin">
                    <p className="carname-admin carname-user">{carname}</p>
                    <p className="perkm-admin">{perkm}Rs/Km</p>
                </section>
                <section className="fare-container-user">
                    <p className="fairdetails">Fair details</p>
                    <div className="book-now-btn-container-user">
                        <button className="book-now-btn">Book Now</button>
                    </div>
                </section>
            </footer>
        </div>
}