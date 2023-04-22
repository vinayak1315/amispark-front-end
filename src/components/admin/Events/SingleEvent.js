import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import MetaData from '../../layout/MetaData'

// icons
import { FaImage } from 'react-icons/fa'

const SingleEvent = () => {
    const navigate = useNavigate();
    return (
        <>
            <MetaData title={"Event"} />
            <div className="channels">
                <div style={{ height: "100%" }} className="row">
                    <div className="col-lg-5 col-12">
                        <input type="file" style={{ display: "none" }} id="file" accept="image/*" />
                        <label for="file" className='bannerEvent d-flex flex-column align-items-center justify-content-center'>
                            <FaImage style={{ fontSize: "100px", color: "#fff" }} />
                            <div style={{ color: "#fff", fontSize: "50px", letterSpacing: "3px" }} className="mt-3">Add Poster</div>
                        </label>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div>
                            <div className="eventText">Title :</div>
                            <input type="text" className='event_input' placeholder='Title' />
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <div className="eventText">Organiser Email :</div>
                            <input type="text" className='event_input' placeholder='Email' />
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <div className="eventText">Description :</div>
                            <textarea rows="2" type="text" className='event_input' placeholder='Description' />
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="eventText" style={{ marginTop: "20px" }}>Event Coordinator :</div>
                                <div style={{ marginTop: "10px" }}>
                                    <div className="eventText">Coordinator 1:</div>
                                    <input type="text" className='event_input' placeholder='Name' />
                                    <input style={{ marginTop: "10px" }} type="text" className='event_input' placeholder='Phone' />
                                </div>
                                <div style={{ marginTop: "15px" }}>
                                    <div className="eventText">Coordinator 2:</div>
                                    <input type="text" className='event_input' placeholder='Name' />
                                    <input style={{ marginTop: "10px" }} type="text" className='event_input' placeholder='Phone' />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="eventText" style={{ marginTop: "20px" }}>Faculty Coordinator :</div>
                                <div style={{ marginTop: "10px" }}>
                                    <div className="eventText">Faculty: </div>
                                    <input type="text" className='event_input' placeholder='Name' />
                                    <input style={{ marginTop: "10px" }} type="text" className='event_input' placeholder='Phone' />
                                </div>
                                <div style={{ marginTop: "15px" }}>
                                    <div className="eventText">Price:</div>
                                    <input type="text" className='event_input' placeholder='Amitian Price' />
                                    <input style={{ marginTop: "10px" }} type="text" className='event_input' placeholder='Non-Amitian Price' />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center" style={{ width: "100%", marginTop: "50px" }}>
                                <div className="d-flex" style={{ gap: "30px" }}>
                                    <div className="btn btn-success" onClick={() => navigate('/events')}>Approve</div>
                                    <div className="btn btn-danger" onClick={() => navigate('/events')}>Reject</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleEvent