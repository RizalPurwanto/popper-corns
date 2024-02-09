import { createStore } from 'redux'

const initialState = {
   
    loginInput: {
        email: '',
        username: '',
        role: ''
    },
    


}

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case 'setEmail':
            return {
                ...state,
                email: action.payload
            }
        case 'setUsername':
            return {
                ...state,
                username: action.payload
            }
        case 'setRole':
                return {
                    ...state,
                    role: action.payload
                }

        

        default:
            return state

    }
}


export default loginReducer