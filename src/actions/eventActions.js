import axios from 'axios';
import {
    GET_EVENTS_REQUEST,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAIL,
    GET_PARTICIPANTS_REQUEST,
    GET_PARTICIPANTS_SUCCESS,
    GET_PARTICIPANTS_FAIL,
    ADD_EVENT_REQUEST,
    ADD_EVENT_SUCCESS,
    ADD_EVENT_FAIL,
    GET_SINGLE_EVENT_REQUEST,
    GET_SINGLE_EVENT_SUCCESS,
    GET_SINGLE_EVENT_FAIL,
    CLEAR_ERRORS
} from '../constants/eventConstants';

import config from '../config/config'

export const getEvents = (status) => async (dispatch) => {
    try {
        dispatch({ type: GET_EVENTS_REQUEST })

        const { data } = await axios.get(`${config.url}/organiser/events?status=${status}`)
        dispatch({
            type: GET_EVENTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_EVENTS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getParticipants = (status) => async (dispatch) => {
    try {
        dispatch({ type: GET_PARTICIPANTS_REQUEST })

        const { data } = await axios.get(`${config.url}/organiser/events?status=${status}`)
        dispatch({
            type: GET_PARTICIPANTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_PARTICIPANTS_FAIL,
            payload: error.response.data.message
        })
    }
}



export const addEvent = (eventData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_EVENT_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log(eventData)
        const { data } = await axios.post(`${config.url}/events`,eventData, config)
        dispatch({
            type: ADD_EVENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADD_EVENT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getSingleEvents = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_SINGLE_EVENT_REQUEST })

        const { data } = await axios.get(`${config.url}/event/${id}`)
        dispatch({
            type: GET_SINGLE_EVENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_SINGLE_EVENT_FAIL,
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
