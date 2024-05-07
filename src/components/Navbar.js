import React from 'react'
import logoImage from '../images/logo.png'
import '../style/navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='container'>
                <nav className="navbar navbar-light" id='navMain'>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src={logoImage} width="127.94" height="47.39" alt="logo" />
                        </a>
                        <div className="d-flex">
                            <a href="/signup" target='_blank'>
                                <button className="btn" style={{ width: '150.39px', height: '60.22px', borderRadius: '108px' }} id='btnSc'  >Get Projects</button>
                            </a>
                            <button className="btn" style={{ width: '150.39px', height: '60.22px', borderRadius: '108px', marginLeft: '15px' }} id='btnMain' type="submit">Onboard Talent</button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
