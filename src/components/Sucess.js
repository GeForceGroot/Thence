import React, { useEffect, useState } from 'react';
import crooss from '../images/cross.png';
import logoImage from '../images/logo.png';
import congo from '../images/cong.png';
import '../style/form.css';

const Sucess = () => {
    const TimerRedirect = () => {
        const [seconds, setSeconds] = useState(5);

        useEffect(() => {
            const timer = setTimeout(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                } else {
                    // Redirect to "/"
                    window.location.href = "/";
                }
            }, 1000); // 1000 milliseconds = 1 second

            return () => clearTimeout(timer);
        }, [seconds]);

        return (
            <div style={{ textAlign: 'center', marginTop: "100px" }}>
                <p>Redirecting you to Homepage in {seconds} Seconds</p>
            </div>
        );
    }

    return (
        <div className='container'>
            <nav className="navbar navbar-light" id='navMain' style={{ border: '0px' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logoImage} width="127.94" height="47.39" alt="logo" />
                    </a>
                    <div className="d-flex">
                        <a className="navbar-brand" href="/">
                            <img  src={crooss} width="64px" height="64px" alt="logo" />
                        </a>
                    </div>
                </div>
            </nav>
            <div style={{ textAlign: 'center', marginTop: '150px' }}>
                <img src={congo} width="718px" height="357px" alt="logo" />
            </div>
            <TimerRedirect />
        </div>
    );
}

export default Sucess;
