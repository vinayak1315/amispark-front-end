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
    ADD_EVENT_RESET,
    GET_SINGLE_EVENT_REQUEST,
    GET_SINGLE_EVENT_SUCCESS,
    GET_SINGLE_EVENT_FAIL,
    CLEAR_ERRORS,
} from '../constants/eventConstants'


export const eventsReducer = (state = { events: [] }, action) => {
    switch (action.type) {
        case GET_EVENTS_REQUEST:
            {
                return {
                    loading: true,
                    events: []
                }
            }
        case GET_EVENTS_SUCCESS: {
            return {
                loading: false,
                events: action.payload.events,
                count: action.payload.count
            }
        }
        case GET_EVENTS_FAIL:
            {
                return {
                    loading: false,
                    error: action.payload
                }
            }
        case CLEAR_ERRORS: {
            return {
                ...state,
                error: null
            }
        }
        default:
            return state
    }
}


export const participantsReducer = (state = { participants: [] }, action) => {
    switch (action.type) {
        case GET_PARTICIPANTS_REQUEST:
            {
                return {
                    loading: true,
                    events: []
                }
            }
        case GET_PARTICIPANTS_SUCCESS: {
            return {
                loading: false,
                participants: action.payload.data,
                count: action.payload.count
            }
        }
        case GET_PARTICIPANTS_FAIL:
            {
                return {
                    loading: false,
                    error: action.payload
                }
            }
        case CLEAR_ERRORS: {
            return {
                ...state,
                error: null
            }
        }
        default:
            return state
    }
}


export const addEventReducer = (state = { events: {} }, action) => {
    switch (action.type) {

        case ADD_EVENT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ADD_EVENT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                events: action.payload.article
            }

        case ADD_EVENT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case ADD_EVENT_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const singleEventsReducer = (state = { event: {} }, action) => {
    switch (action.type) {
        case GET_SINGLE_EVENT_REQUEST:
            {
                return {
                    loading: true,
                    event: {}
                }
            }
        case GET_SINGLE_EVENT_SUCCESS: {
            return {
                loading: false,
                event: action.payload.events
            }
        }
        case GET_SINGLE_EVENT_FAIL:
            {
                return {
                    loading: false,
                    error: action.payload
                }
            }
        case CLEAR_ERRORS: {
            return {
                ...state,
                error: null
            }
        }
        default:
            return state
    }
}

