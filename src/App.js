import React, { useEffect } from 'react'
import './App.css'
import './responsive.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Redux
import store from './store'
import { loadUser } from './actions/userActions'

// Components
import Home from './components/home/Home.js'
import Login from './components/admin/Login'
import Registeration from './components/home/Registeration'
import Dashboard from './components/admin/Dashboard/Dashboard';
import SideBar from './components/admin/SideBar/SideBar'
import AddEvent from './components/admin/AddEvent/AddEvent'
import Events from './components/admin/Events/Events'
import SingleEvent from './components/admin/Events/SingleEvent'
import Participants from './components/admin/Participants/Participants';
import ParticipantsList from './components/admin/Participants/ParticipantsList';
import Organiser from './components/admin/Oraganiser/Organiser';
import ProtectedRoute from './components/admin/ProtectedRoute';


const App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <div className="home_bg">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path='/login' element={<Login />} />
        </Routes>
        <Routes>
          <Route exact path='/registeration' element={<Registeration />} />
        </Routes>
        <Routes>
          <Route exact path='/dashboard' element={
            <ProtectedRoute isAdmin={true}>
              <SideBar>
                <Dashboard />
              </SideBar>
            </ProtectedRoute> 
          } />
        </Routes>
        <Routes>
          <Route exact path='/addEvent' element={
            <ProtectedRoute isAdmin={true}>
              <SideBar>
                <AddEvent />
              </SideBar>
            </ProtectedRoute>
          } />
        </Routes>
        <Routes>
          <Route exact path='/events' element={
            <ProtectedRoute isAdmin={true}>
              <SideBar>
                <Events />
              </SideBar>
            </ProtectedRoute>
          } />
        </Routes>
        <Routes>
          <Route exact path='/events/1' element={
            <ProtectedRoute isAdmin={true}>
              <SideBar>
                <SingleEvent />
              </SideBar>
            </ProtectedRoute>
          } />
        </Routes>
        <Routes>
          <Route exact path='/participants' element={
            <ProtectedRoute isAdmin={true}>
              <SideBar>
                <Participants />
              </SideBar>
            </ProtectedRoute>
          } />
        </Routes>
        <Routes>
          <Route exact path='/participants/list/1' element={
            <ProtectedRoute isAdmin={true}>
              <SideBar>
                <ParticipantsList />
              </SideBar>
            </ProtectedRoute>
          } />
        </Routes>
        <Routes>
          <Route exact path='/organisers' element={
            <ProtectedRoute isAdmin={true}>
              <SideBar>
                <Organiser />
              </SideBar>
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App