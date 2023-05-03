import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import PasswordResetForm from "./PasswordResetForm";
import '../../styles/Login.css'
export default function Home() {
    const [isLog, setIsLog] = useState(true);
    const [isreset, setIsreset] = useState(true);
    return <>
        <div className="home-container">
            <div className="section-container">
                <section className="text-section">
                    Miles: <br />
                    Car Rental
                </section>
                <section className="form-section">
                    {
                        isLog ?
                            (isreset ?
                                <LoginForm setIsLog={setIsLog} setIsreset={setIsreset} /> :
                                <PasswordResetForm setIsreset={setIsreset} />) :
                            <RegisterForm setIsLog={setIsLog} />
                    }
                </section>
            </div>
        </div>
    </>
}