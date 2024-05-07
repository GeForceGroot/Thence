import React from 'react'
import crooss from '../images/cross.png'
import logoImage from '../images/logo.png'
import txtt from '../images/txt.png'
import '../style/form.css'

const FormPage = () => {

    function handleEmailChange(event) {
        event.preventDefault()
    }

    function handleSubmit(event) {
        event.preventDefault();

        const emailInput = document.getElementById('emailInput').value;

        if (isValidEmail(emailInput)) {
            window.location.href = '/success';
        } else {
            const emailError = document.getElementById('emailError');
            emailError.textContent = "Enter a valid email address";
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    return (
        <>
            <div className='container'>
                <nav className="navbar navbar-light" id='navMain' style={{ border: '0px' }}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src={logoImage} width="127.94" height="47.39" alt="logo" />
                        </a>
                        <div className="d-flex">
                            <a className="navbar-brand" href="/">
                                <img src={crooss} width="64px" height="64px" alt="logo" />
                            </a>
                        </div>
                    </div>
                </nav>
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <img src={txtt} width="588px" height="178px" alt="logo" />
                </div>
                <div class="signup-container">
                    <form class="signup-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter your name" required />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            id="emailInput"
                            onChange={handleEmailChange}
                        />
                        <span id="emailError" style={{ color: 'red' }}></span>
                        <button type="submit">Submit</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default FormPage
