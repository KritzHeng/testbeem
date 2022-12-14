import React from 'react'
import logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Typed from 'react-typed'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                
            {/* <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."></img></a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon"></span> */}
                <FontAwesomeIcon icon={faBars} style={{color: "#ffff"}} />
            </button>
            <Typed className='typed-text'
            strings={['myportfolio!']}
            typeSpeed={120}
            />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/testbeem"> Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/testbeem/Myproject">My project</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/testbeem/Aboutme">About me</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar