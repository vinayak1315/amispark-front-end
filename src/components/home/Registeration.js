import React, { useState, useEffect } from 'react'

// Component
import NavBar from '../navbar/NavBar'
import MetaData from '../layout/MetaData'

// icons
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'

const Registeration = () => {

    const [event, setEvent] = useState([])
    const [toggler, setToggler] = useState(false)

    const toggleHandler = () => {
        setToggler(!toggler)
    }

    const checkHandler = (e) => {
        const {value, checked} = e.target
        if(checked) {
            setEvent(pre => [...pre, value])
        } else {
            setEvent(pre => {
                return [...pre.filter(id => id!== value)]
            })
        }
    }

    useEffect(() => {
        console.log(event)
    }, [event])


    return (
        <>
            <MetaData title={"Registeration"} />
            <NavBar />
            <div className="d-flex justify-content-center">
                <div className='registeration'>
                    <div className="yourselfFont">Get Your Self Register Now</div>
                    <div className='d-flex justify-content-between align-items-center mt-2 fontAmity' style={{color:"#fff"}}>
                        <div>Amitian</div>
                        <div>
                            {toggler ? <BsToggleOn className="toggle" onClick={toggleHandler} /> : <BsToggleOff className="toggle" onClick={toggleHandler} />}
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-lg-6 col-md-6 col-12">
                            <input className="registerInput" type="text" placeholder='Name' />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <input className="registerInput" type="text" placeholder='Email' />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <input className="registerInput" type="text" placeholder='Enrollment No.' />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <input className="registerInput" type="text" placeholder='Phone' />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <input className="registerInput" type="text" placeholder='Semester' />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <select name="role" id="role" className='registerInput'>
                                <option className='option_val' value="admin" >Branch</option>
                                <option className='option_val' value="organiser">ASET</option>
                                <option className='option_val' value="organiser">ALS</option>
                                <option className='option_val' value="organiser">AIBIA</option>
                                <option className='option_val' value="organiser">ABS</option>
                                <option className='option_val' value="organiser">AIB</option>
                            </select>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <select name="role" id="role" className='registerInput'>
                                <option className='option_val' value="admin" >Gender</option>
                                <option className='option_val' value="organiser">Male</option>
                                <option className='option_val' value="organiser">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-3" style={{ gap: "10px", color:"#fff" }}>
                        <div className='d-flex flex-column' style={{gap:"20px"}}>
                            <div className="d-flex align-items-center" style={{gap:"10px"}}>
                                <input type="checkbox" onChange={checkHandler} value="1"/>
                                <div>Event Name</div>
                            </div>
                            <div className="d-flex align-items-center" style={{gap:"10px"}}>
                                <input type="checkbox" onChange={checkHandler} value="2"/>
                                <div>Event Name</div>
                            </div>
                            <div className="d-flex align-items-center" style={{gap:"10px"}}>
                                <input type="checkbox" onChange={checkHandler} value="3"/>
                                <div>Event Name</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registeration