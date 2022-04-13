import { CinemaState, CinemaAction, CinemaActionTypes } from "../types/cinema"

const initialState: CinemaState = {
    id: [],
    currentMovies: [{}],
    movies: [{}],
    currentPage: 1,
    perPage: 12,
    error: "",
    loading: false,
}

export const cinemaReducer = (
    state: CinemaState = initialState,
    action: CinemaAction
): CinemaState => {
    switch (action.type) {
        case CinemaActionTypes.INIT_CINEMA:
            return { ...state, loading: true, ...action.payload }
        case CinemaActionTypes.FETCH_MOVIES:
            return { ...state, loading: true }
        case CinemaActionTypes.FETCH_MOVIES_SUCCESS:
            return { ...state, currentMovies: action.payload, loading: false }
        case CinemaActionTypes.FETCH_MOVIES_ERROR:
            return { ...state, error: action.payload, loading: false }
        default:
            return state
    }
}
