import axios from 'axios';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    CLEAR_ERRORS
} from '../constants/userConstant';
import env from '../config/config'



// Login
export const login = ( email, password ) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_REQUEST,
        })
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        const { data } = await axios.post(`${env.url}/login` , { email, password }, config)
        dispatch({ 
            type: LOGIN_SUCCESS,
            payload: data.role
        })
    } catch(error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}


// Load Users
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: LOAD_USER_REQUEST,
        })
        const { data } = await axios.get(`${env.url}/me`)
        dispatch({ 
            type: LOAD_USER_SUCCESS,
            payload: data.user
        })
    } catch(error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}


// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}