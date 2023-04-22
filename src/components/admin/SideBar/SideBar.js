import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './SideBar.css'

// Icons
import { CgMoveLeft, CgOrganisation } from 'react-icons/cg'
import { ImPlus } from 'react-icons/im'
import { MdDashboardCustomize } from 'react-icons/md'
import { BsCalendarEvent } from 'react-icons/bs'
import { FaUserGraduate } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'

// Images
import logo from '../../../Images/Amispark_2023.png'

const SideBar = ({ children }) => {
    const [isOpen, setOpen] = useState(false)
    const [logout, setLogout] = useState(false)
    const navigate = useNavigate();

    const Routes = [
        {
            id: 1,
            route: "/dashboard",
            title: "Dashboard",
            icon: <MdDashboardCustomize style={{ fontSize: "24px" }} />
        },
        {
            id: 2,
            route: "/addEvent",
            title: "Add Event",
            icon: <ImPlus style={{ fontSize: "20px" }} />
        },
        {
            id: 3,
            route: "/events",
            title: "Events",
            icon: <BsCalendarEvent style={{ fontSize: "20px" }} />
        },
        {
            id: 4,
            route: "/participants",
            title: "Participants",
            icon: <FaUserGraduate style={{ fontSize: "20px" }} />
        },
        {
            id: 5,
            route: "/organisers",
            title: "Organisers",
            icon: <CgOrganisation style={{ fontSize: "20px" }} />
        },
    ]
    const logoAnimation = {
        hidden: {
            width: 0
        },
        show: {
            width: "90px",
            tranisition: {
                duration: 0.3
            }
        }
    }
    const menuAnimation = {
        hidden: {
            fontSize: 0
        },
        show: {
            fontSize: "25px",
            tranisition: {
                duration: 0.3
            }
        }
    }

    return (
        <>
            <div className="main_contianer">
                <motion.div animate={{ width: isOpen ? "5%" : "20%" }} className='sideBar'>
                    <div className={isOpen ? "d-flex align-items-center justify-content-center" : "d-flex align-items-center justify-content-between"} style={{ padding: "0px 20px", marginBottom: "50px" }}>
                        <AnimatePresence>
                            {!isOpen &&
                                <motion.img
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    variants={logoAnimation}
                                    src={logo}
                                    alt="Error" />}
                        </AnimatePresence>
                        <div onClick={() => setOpen(!isOpen)}>
                            <CgMoveLeft className={isOpen ? "rotate" : "transition"} style={{ fontSize: "50px", color: "#fff", cursor: "pointer" }} />
                        </div>
                    </div>
                    {Routes.map(data =>
                        <NavLink to={`${data.route}`} activeClassName="active" className={isOpen ? "d-flex align-items-center lists justify-content-center" : 'd-flex align-items-center lists'} style={{ marginTop: "5px" }}>
                            <div>
                                {data.icon}
                            </div>
                            {!isOpen &&
                                <motion.div
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    variants={menuAnimation}
                                    className="title">{data.title}</motion.div>
                            }
                        </NavLink>
                    )}

                    <div className="logout d-flex align-items-center justify-content-center" onClick={() => setLogout(true)}>
                        <FiLogOut />
                    </div>

                   

                </motion.div>
                <motion.div animate={{ width: isOpen ? "95%" : "80%" }}>{children}</motion.div>
                {logout &&
                        <div className="popUpBg d-flex align-items-center justify-content-center">
                            <div className="popUp d-flex align-items-center flex-column justify-content-center" style={{ gap: "20px" }}>
                                <div style={{ fontSize: "30px", fontWeight: "600", letterSpacing: "4px" }}>Are You Sure ?</div>
                                <div className="d-flex" style={{ gap: "30px" }}>
                                    <div className="btn btn-success" onClick={() => navigate('/')}>Logout</div>
                                    <div className="btn btn-danger" onClick={() => setLogout(false)}>Cancel</div>
                                </div>
                            </div>
                        </div>
                    }
            </div>
        </>
    )
}

export default SideBar