import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { stayReducer } from './stay.reducer'
import { userReducer } from './user.reducer'
import { orderReducer } from './order.reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const rootReducer = combineReducers({
    stayModule: stayReducer,
    userModule: userReducer,
    orderModule: orderReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
window.gStore = store