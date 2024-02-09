

const initialState = {


    casts: [],




}

function castReducer(state = initialState, action) {
    switch (action.type) {
        case 'setCasts':
            return {
                ...state,
                casts: action.payload
            }


        default:
            return state

    }
}


export default castReducer