import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import MetaData from '../../layout/MetaData'

const Organiser = () => {
    const [role, setRole] = useState(false);
    const [organiser, setOrganiser] = useState(false);
    return (
        <>
            <MetaData title={"Organisers"} />
            <div className="channels">
                <div className='d-flex align-items-center justify-content-between'>
                    <div style={{ fontSize: "22px", color: "#fff" }}>Hello, Vinayak!!</div>
                    <div className='eventRegister btn' onClick={() => setOrganiser(true)}>Add Organiser</div>
                </div>
                <div className="eventBox">
                    <table style={{ width: "100%" }}>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Branch</th>
                            <th>Semester</th>
                            <th>Role</th>
                        </tr>
                        <tr>
                            <td>Atul</td>
                            <td>atul@gmail.com</td>
                            <td>9876543211</td>
                            <td>ASET</td>
                            <td>1</td>
                            <td>
                                <div className='d-flex align-items-center ' style={{ gap: "10px" }}>
                                    <div>Organiser</div>
                                    <div className='view_btn btn' onClick={() => setRole(true)}>Update Role</div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>

                {role &&
                    <div className="popUpBg d-flex align-items-center justify-content-center">
                        <div className="popUp d-flex align-items-center flex-column justify-content-center" style={{ gap: "20px" }}>
                            <div style={{ fontSize: "30px", fontWeight: "600", letterSpacing: "4px" }}>Update Role</div>
                            <div>
                                <select name="role" id="role" style={{ width: "150px", padding: "5px 10px" }}>
                                    <option value="admin" >Admin</option>
                                    <option value="organiser">Organiser</option>
                                </select>
                            </div>
                            <div className="d-flex" style={{ gap: "30px" }}>
                                <div className="btn btn-success" onClick={() => setRole(false)}>Update</div>
                                <div className="btn btn-danger" onClick={() => setRole(false)}>Cancel</div>
                            </div>
                        </div>
                    </div>
                }
                {organiser &&
                    <div className="popUpBg d-flex align-items-center justify-content-center">
                        <div className="addOrganiserPopUp" style={{ gap: "20px" }}>
                            <div style={{ fontSize: "30px", fontWeight: "600", letterSpacing: "4px", textAlign: "center" }}>Add Organiser</div>
                            <div style={{ marginTop: "30px" }}>
                                <div className='d-flex justify-content-between' >
                                    <input className='organiserInput' placeholder='Name' type="text" />
                                    <input className='organiserInput' placeholder='Email' type="text" />
                                </div>
                                <div className='d-flex justify-content-between' >
                                    <input className='organiserInput' placeholder='Password' type="password" />
                                    <input className='organiserInput' placeholder='Phone' type="text" />
                                </div>
                                <div className='d-flex justify-content-between' >
                                    <select name="role" id="role" className='organiserInput'>
                                        <option value="admin" >Branch</option>
                                        <option value="organiser">ASET</option>
                                        <option value="organiser">ALS</option>
                                        <option value="organiser">AIBIA</option>
                                        <option value="organiser">ABS</option>
                                        <option value="organiser">AIB</option>
                                    </select>
                                    <input className='organiserInput' placeholder='Semester' type="text" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center" style={{ gap: "30px", marginTop: "50px" }}>
                                <div className="btn btn-success" onClick={() => setOrganiser(false)}>Add Organiser</div>
                                <div className="btn btn-danger" onClick={() => setOrganiser(false)}>Discard</div>
                            </div>
                        </div>
                    </div>
                }

            </div>
        </>
    )
}

export default Organiser