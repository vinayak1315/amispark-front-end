import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
// Images
import logo from '../../Images/amity_logo.png';

// Icons
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    const navigate = useNavigate();
    const [toggler, setToggler] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [dropOne, setDropOne] = useState(false);
    const [dropTwo, setDropTwo] = useState(false);
    const ToggleHandler = () => {
        if (toggler) {
            setToggler(false);
        } else {
            setToggler(true);
        }
    }

    const scroller = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    const eventHandler = () => {
        if(dropOne === true || dropTwo === true) {
            setDropOne(false);
            setDropTwo(false);
        }
    }
    window.addEventListener('scroll', scroller);
    return (
        <>
            <nav className={navbar ? "navbar_css navActive" : "navbar_css"} onClick={eventHandler}>
                <div className="container">
                    <div id="navbar">
                        <div className="res_menu">
                            <div className="res_logo">
                                <img onClick={() => navigate('/')} src={logo} className="main-logo" width="100%" height="35px" alt="Logo" style={{ cursor: "pointer" }} />
                            </div>
                            <div id="mobile" onClick={ToggleHandler}>
                                {toggler ? <FaTimes className='toggle-icons' /> : <FaBars className='toggle-icons' />}
                            </div>
                        </div>
                        <div>
                            <ul id="nav_list" className={toggler ? "nav_list active-navbar" : "nav_list"}>
                                <li id="mobile" className="imp-nav d-flex align-items-center justify-content-center" onClick={ToggleHandler}>
                                    <FaTimes className='toggle-icons icon_02' />
                                </li>
                                <li className="d-flex align-items-center" onClick={() => { setToggler(false); }}>
                                    <Link exact to='/' style={{ textDecoration: "none" }} className="nav_lists">Home</Link>
                                </li>
                                <li className="d-flex align-items-center" onClick={() => { setToggler(false); }}>
                                    <Link exact to='/registeration' style={{ textDecoration: "none" }} className="nav_lists">Registeration</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar