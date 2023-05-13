import React, { useEffect, useState } from "react";
import Cars from "./Cars";
import '../../styles/Admin.css'
import { Link } from "react-router-dom";
import { getCars } from "../../utils/api-utils";
import { getCurrentUser } from "../../utils/storage-utils";

export default function Admin() {
    // const { cars } = useContext(CarList);
    const [cars, setCars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const maxPage = Math.ceil(cars.length / itemsPerPage);
    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber);
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = cars.slice(startIndex, endIndex);
    // console.log(cars);
    useEffect(() => {
        getCars().then(res => {
            setCars(res.result.reverse());
        });
        // setPreview("");
    }, []);
    return <div>
        <div>
            <div className="admin-body-admin">
                <div className="welcome-message-admin">
                    <h1>Hey {getCurrentUser().name}!</h1>
                </div>
                <div className="cars-container-admin">
                    <div className="car-heading-and-add-container-admin">
                        <div className="cars-heading-container-admin">
                            <h2 className="cars-heading-admin">Cars</h2>
                        </div>
                        <div className="add-car-btn-admin">
                            <Link to={"/admin/addcar"}>
                                <button className="addCar-admin">Add Car</button>
                            </Link>
                        </div>
                    </div>
                    {
                        cars.length === 0 ? <h1>You haven't uploaded any cars</h1> : <div>
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
                            <div className="car-cards-container-admin">
                                {
                                    currentData.map(car => {
                                        return <Cars key={car._id} car={car} />
                                    })
                                }
                            </div>
                        </div>

                    }
                </div>
            </div>
        </div>
    </div>
}