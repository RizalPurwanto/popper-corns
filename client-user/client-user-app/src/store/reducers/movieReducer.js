const initialState = {
  movies: [],
  movie: {},
  open: false,
  casts: [],
  movieInput: {
    title: "",
    slug: "",
    synopsis: "",
    imageUrl: "",
    rating: 0,
    trailerUrl: "",
    genreId: 0,
    authorId: 1,
  },

  loading: true,
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case "setMovies":
      return {
        ...state,
        movies: action.payload,
      };
    case "setMovie":
      return {
        ...state,
        movie: action.payload,
      };
    case "setLoadingTrue":
      return {
        ...state,
        loading: true,
      };
    case "setLoadingFalse":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

export default movieReducer;
