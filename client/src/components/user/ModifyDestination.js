import React, { useEffect, useState } from "react";
import '../../styles/Destination.css';
import '../../styles/ModifyDestination.css';
import { getBookingDetails, saveBookingDetails } from '../../utils/api-utils'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function ModifyDestination() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        startdate: "",
        enddate: "",
        origin: "",
        destination: "",
    });
    useEffect(() => {
        getBookingDetails()
            .then(res => {
                if (res.status === "Success") {
                    setFormData(res.result[res.result.length - 1]);
                }
            })
    }, []);
    // console.log(formData);
    function handleClick() {
        saveBookingDetails(formData)
            .then(res => {
                if (res.status === 'Success') {
                    setFormData({
                        startdate: "",
                        enddate: "",
                        origin: "",
                        destination: "",
                    })
                    navigate('/user/carbooking');
                }
                else {
                    toast.error(`Failed to save,try again...`, {
                        position: "bottom-right"
                    })
                }
            })
    }
    return <>
        <div className="change-background">
            <div className="section-container-user-black">
                <div className="section-container-user">
                    <section className="text-section-user">
                        Modify Your Booking Details!
                    </section>
                    <section className="form-section-user">
                        <div className="form-container-user">
                            <div className="field-container-user">
                                <label className="label-user">Start-Date</label>
                                <input
                                    className="input-user"
                                    placeholder="startdate"
                                    name="startdate"
                                    type="date"
                                    value={formData.startdate}
                                    onChange={(e) => {
                                        setFormData(data => {
                                            return {
                                                ...data,
                                                startdate: e.target.value
                                            }
                                        })
                                    }}
                                />
                            </div>
                            <div className="field-container-user">
                                <label className="label-user">End-Date</label>
                                <input
                                    className="input-user"
                                    placeholder="enddate"
                                    name="enddate"
                                    type="date"
                                    value={formData.enddate}
                                    onChange={(e) => {
                                        setFormData(data => {
                                            return {
                                                ...data,
                                                enddate: e.target.value
                                            }
                                        })
                                    }}
                                />
                            </div>
                            <div className="field-container-user">
                                <label className="label-user">Origin</label>
                                <input
                                    className="input-user"
                                    placeholder="origin"
                                    name="origin"
                                    type="text"
                                    value={formData.origin}
                                    onChange={(e) => {
                                        setFormData(data => {
                                            return {
                                                ...data,
                                                origin: e.target.value
                                            }
                                        })
                                    }}
                                />
                            </div>
                            <div className="field-container-user">
                                <label className="label-user">Destination</label>
                                <input
                                    className="input-user"
                                    placeholder="destination"
                                    name="destination"
                                    type="text"
                                    value={formData.destination}
                                    onChange={(e) => {
                                        setFormData(data => {
                                            return {
                                                ...data,
                                                destination: e.target.value
                                            }
                                        })
                                    }}
                                />
                            </div>
                        </div>
                        <div className="button-container-user">
                            <button onClick={e=>{
                                navigate('/user/carbooking');
                            }} className='cancel-button-modify'>
                                Cancel
                            </button>
                            <button onClick={handleClick} className="button-user">
                                Save
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </>
}