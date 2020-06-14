import { combineReducers } from 'redux'

import AppReducer from './app-reducer'

const roorReducer = combineReducers({ appReducer : AppReducer });

export default roorReducer;