import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAlert } from 'react-alert';

// Component
import MetaData from '../layout/MetaData'
import NavBar from '../navbar/NavBar'
import Loader from '../layout/Loader'

// redux
import { useSelector, useDispatch } from 'react-redux';

// actions
import { login, clearErrors } from '../../actions/userActions'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const alert = useAlert()
  const { loading, isAuthenticated, error } = useSelector(state => state.auth)

  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated) {
      navigate('/dashboard')
    } 
    if(error) {
      alert.error(error)
      dispatch(clearErrors());
    }
  }, [isAuthenticated, navigate, error, dispatch])

  const submitHandler = (e) => {
    e.preventDefault();
    if(email == "" || password == "") {
      alert.error("Please enter a valid email and password")
    } else {
      dispatch(login(email, password))
    }
  }

  return (
    <>
    <NavBar/>
    <MetaData title={"Login"} />
    {loading ? <Loader /> : 
      <div className='login'>
        <div className='loginBox'>
          <div style={{ fontSize: "30px" }} className="text-center">Login</div>
          <div>
            <div className="textInput">Email :</div>
            <input type="text" onChange={(e) => setEmail(e.target.value)}  value={email} className='login_input' />
          </div>
          <div>
            <div className="textInput">Password :</div>
            <input type="password" className='login_input' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='d-flex justify-content-center'>
          <button className="login_btn btn" onClick={submitHandler}>
            <div> LOGIN</div>
          </button>
        </div>
        </div>
      </div>
    }
    </>
  )
}

export default Login