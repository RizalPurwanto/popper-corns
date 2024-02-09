import { combineReducers } from "redux";
import castReducer from './castReducer'
import movieReducer from './movieReducer'
import genreReducer from './genreReducer'
import loginReducer   from './loginReducer'


const rootReducer =  combineReducers({
    movieReducer,
    genreReducer,
    castReducer,
    loginReducer
})

export default rootReducer