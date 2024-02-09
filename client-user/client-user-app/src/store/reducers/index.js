import { combineReducers } from "redux";
import castReducer from './castReducer'
import movieReducer from './movieReducer'



const rootReducer =  combineReducers({
    movieReducer,
    castReducer,
    
})

export default rootReducer