
const initialState = {

    genreInput: {
        name: '',


    },
    genre: '',
    genres: [],
    loading: true


}

function genreReducer(state = initialState, action) {
    switch (action.type) {

        case 'setLoading':
            return {
                ...state,
                loading: false
            }

        case 'setGenres':
            return {
                ...state,
                genres: action.payload
            }

        case 'setOneGenre':
            return {
                ...state,
                genre: action.payload
            }

        default:
            return state

    }
}


export default genreReducer