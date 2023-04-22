import React from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import MetaData from '../../layout/MetaData'

const ParticipantsList = () => {
    const navigate = useNavigate();

    return (
        <>
            <MetaData title={"Participants"} />
            <div className="channels">
                <div className='d-flex align-items-center justify-content-between'>
                    <div style={{ fontSize: "22px", color: "#fff" }}>Hello, Vinayak!!</div>
                    <div>
                        <input style={{ fontSize: "22px", color: "#fff", width: "400px" }} placeholder='Email Search' className='event_input' />
                    </div>
                </div>
                <div className="eventBox">
                    <table style={{ width: "100%" }}>
                        <tr>
                            <th>Name</th>
                            <th>Branch</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Enrollment</th>
                            <th>Amitian</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>BTECH, 7</td>
                            <td>9876543211</td>
                            <td>vinayaksinghvs53@gmail.com</td>
                            <td>A80105219013</td>
                            <td>true</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ParticipantsList 