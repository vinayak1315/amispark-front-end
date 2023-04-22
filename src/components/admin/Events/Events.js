import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Events.css'

// Components
import MetaData from '../../layout/MetaData'

// icons
import { FaImage } from 'react-icons/fa'

const Events = () => {
    const [active, setActive] = useState(1)
    const [view, setView] = useState(false)
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <MetaData title={"Events"} />
            <div className="channels">
                <div className="eventStatus d-flex">
                    <div className={active === 1 ? "activeStatus" : 'statusText'} style={{ width: "25%", fontSize: "22px" }} onClick={() => setActive(1)}>
                        <div>All</div>
                        {active === 1 && <div className="d-flex justify-content-center"><div className="bar01"></div></div>}
                    </div>
                    <div className={active === 2 ? "activeStatus" : 'statusText'} style={{ width: "25%", fontSize: "22px" }} onClick={() => setActive(2)}>
                        <div>Pending</div>
                        {active === 2 && <div className="d-flex justify-content-center"><div className="bar01"></div></div>}
                    </div>
                    <div className={active === 3 ? "activeStatus" : 'statusText'} style={{ width: "25%", fontSize: "22px" }} onClick={() => setActive(3)}>
                        <div>Approved</div>
                        {active === 3 && <div className="d-flex justify-content-center"><div className="bar01"></div></div>}
                    </div>
                    <div className={active === 4 ? "activeStatus" : 'statusText'} style={{ width: "25%", fontSize: "22px" }} onClick={() => setActive(4)}>
                        <div>Rejected</div>
                        {active === 4 && <div className="d-flex justify-content-center"><div className="bar01"></div></div>}
                    </div>
                </div>


                <div className="eventBox">
                    <table style={{ width: "100%" }}>
                        <tr>
                            <th>Event</th>
                            <th>Event Coordinator</th>
                            <th>Faculty Coordinator</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>
                                <div className="d-flex" style={{ gap: "15px" }}>
                                    <div>
                                        <div>Xyz Sharma</div>
                                        <div>9876543210</div>
                                    </div>
                                    <div>
                                        <div>Xyz Sharma</div>
                                        <div>9876543210</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <div>Xyz Sharma</div>
                                    <div>9876543210</div>
                                </div>
                            </td>
                            <td>
                                <div style={{ color: "#ffd453" }}>Pending</div>
                            </td>
                            <td>
                                <div className='view_btn' onClick={() => navigate('/events/1')}>
                                    View
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
           
        </>
    )
}

export default Events