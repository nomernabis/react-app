import { createStore } from 'redux'
import postReducer from './reducers/postReducers'

const store = createStore(postReducer)

export default store
