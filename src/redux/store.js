import {createStore,applyMiddleware} from 'redux'
import {thunk}  from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const initailState={}
const middlware= applyMiddleware(thunk);

const store=createStore(rootReducer,initailState,middlware)
export default store;
