import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// images
import slider_01 from '../../Images/slider_01.jpg'

const Banners = (props) => {
  const navigate = useNavigate();

    const bannerData = props.data
    useEffect(() => {
        console.log(props.data)
    }, [])
    return (
        <>
            {/* {bannerData.map(banner => */}
                <div className="bannersEffect">
                    <img src={slider_01} alt="poster" className="poster_img" />
                    <div class="img_overlay">
                        <div className="text-center eventName"><u>EVENT NAME</u></div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <div className="m-10">
                            <div className='title'><u>STUDENT COORDINATOR</u></div>
                            <div className="userName">xyz sharma (9876543214) </div>
                            <div className="userName">abc sharma (9876543214)</div>
                        </div>
                        <div className='mt-3 m-10'>
                            <div className='title'><u>FACULTY COORDINATOR</u></div>
                            <div className="userName">xyz sharma (9876546312)</div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="registerBtn btn">
                                <div>REGISTER YOURSELF</div>
                            </button>
                        </div>
                    </div>
                </div>
            {/* )} */}
        </>
    )
}

export default Banners