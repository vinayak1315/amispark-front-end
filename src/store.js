import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer } from './reducers/userReducers'
import { eventsReducer, participantsReducer, addEventReducer, singleEventsReducer } from './reducers/eventReducers'

const reducer = combineReducers({
    // User reducer
    auth: authReducer,
    events: eventsReducer,
    participants: participantsReducer,
    addEvent: addEventReducer,
    getEvent: singleEventsReducer
});
let initialState = {}
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;