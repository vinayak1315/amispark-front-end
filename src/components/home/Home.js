import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

// Components
import MetaData from '../layout/MetaData'
import Banners from './Banners'
import Footer from '../layout/Footer'
import NavBar from '../navbar/NavBar'
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <MetaData title={'Home'} />
      <NavBar />
      <div className="homeHeader">
        <h1 className="text-center">GET READY FOR AMISPARK 2023</h1>
        <h2 className="text-center">EVENT DATE : 13/04/2023 AND 13/04/2023</h2>
        <button className="register_btn btn">
          <div onClick={() => navigate('/registeration')}>REGISTER YOURSELF</div>
        </button>
      </div>
      <div className="bg_transparent container">
        <div className="d-flex align-items-center justify-content-center">
          <h1 style={{ color: "#fff" }}>EVENTS...!!!</h1>
          {/* <div className="d-flex align-items-center clickMore">
            <h2>Click for more</h2>
            <div>
              <BsArrowRightCircle className="moreIcon" />
            </div>
          </div> */}
        </div>
        <div className="banner">
          <div className="sliderEffect">
            <div className="d-flex align-items-center bannerGap">
              <Banners />
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default Home