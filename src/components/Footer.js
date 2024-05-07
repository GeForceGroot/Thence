/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='container' style={{marginTop:"50px"}}>
                <nav className="navbar navbar-light" id='navMain' style={{backgroundColor:"#F5F5F5"}}>
                    <div className="container-fluid">
                        <p style={{}}>© Talup 2023. All rights reserved</p>
                        <div className="d-flex" style={{textDecoration:"underline"}}>
                            <a href='/' className="link">Terms & Conditions</a>
                            <a href='/' className="link" style={{marginLeft:'15px'}}>Privacy Policy</a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Footer
