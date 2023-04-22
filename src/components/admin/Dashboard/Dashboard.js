import React, { useEffect } from 'react'
import './Dashboard.css'

// Component
import MetaData from '../../layout/MetaData'
import Loader from '../../layout/Loader'

// redux
import { useSelector, useDispatch } from 'react-redux';

// actions
import { getEvents, clearErrors } from '../../../actions/eventActions'

const Dashboard = () => {

    const { loading, isAuthenticated, error, events, count } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEvents("all"))
    }, [dispatch])

    return (
        <>
            <MetaData title={"Dashboard"} />
            {loading ? <Loader /> :
                <div className="channels">
                    <div className='d-flex flex-column justify-content-between' style={{ height: "100%", gap: "30px" }}>
                        <div style={{ height: "50%" }} className="dashPrimary">
                            <div className='d-flex align-items-center justify-content-center' style={{ height: "100%" }}>
                                <div className="dashEvent">TOTAL EVENTS: <b style={{ fontSize: "65px" }}>10</b></div>
                            </div>
                        </div>
                        <div style={{ height: "50%" }} className="dashSuccess">
                            <div className='d-flex align-items-center justify-content-center' style={{ height: "100%" }}>
                                <div className="dashEvent">PARTICIPANTS: <b style={{ fontSize: "65px" }}>10</b></div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Dashboard