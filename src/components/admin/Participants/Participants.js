import React from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import MetaData from '../../layout/MetaData'

const Participants = () => {
    const navigate = useNavigate();

    return (
        <>
            <MetaData title={"Participants"} />
            <div className="channels">
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
                                <div style={{color: "#ffd453"}}>Pending</div>
                            </td>
                            <td>
                                <div className='view_btn' onClick={() => navigate('/participants/list/1')}>
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

export default Participants