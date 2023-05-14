import React, { useState } from "react";
import '../../styles/Destination.css'
import { saveBookingDetails } from '../../utils/api-utils'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Destination() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        startdate: "",
        enddate: "",
        origin: "",
        destination: "",
    });
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
                else
                {
                    toast.error(`Failed to save,try again...`, {
                        position: "bottom-right"
                    })
                }
            })
    }
    return <>
        <div className="home-container-user">
            <div className="section-container-user-black">
                <div className="section-container-user">
                    <section className="text-section-user">
                        Book Your Car Right Away!
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
                                    onChange={(e) => {
                                        setFormData(res => ({ ...res, startdate: e.target.value }))
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
                                    onChange={(e) => {
                                        setFormData(res => ({ ...res, enddate: e.target.value }))
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
                                    onChange={(e) => {
                                        setFormData(res => ({ ...res, origin: e.target.value }))
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
                                    onChange={(e) => {
                                        setFormData(res => ({ ...res, destination: e.target.value }))
                                    }}
                                />
                            </div>
                        </div>
                        <div className="button-container-user">
                            <button onClick={handleClick} className="button-user">
                                Proceed
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </>
}