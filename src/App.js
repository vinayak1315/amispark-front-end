import React from 'react'
import './App.css'
import './responsive.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Home from './components/home/Home.js'
import Navbar from './components/navbar/NavBar'

const App = () => {
  return (
    <div className="home_bg">
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App