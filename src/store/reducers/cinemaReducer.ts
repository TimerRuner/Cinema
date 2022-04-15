import { CinemaState, CinemaAction, CinemaActionTypes } from "../types/cinema"

const initialState: CinemaState = {
    id: [],
    currentMovies: [],
    movies: [],
    currentPage: 1,
    perPage: 12,
    error: "",
    loading: false,
    sortedMovies: [],
}

export const cinemaReducer = (
    state: CinemaState = initialState,
    action: CinemaAction
): CinemaState => {
    switch (action.type) {
        case CinemaActionTypes.INIT_CINEMA:
            return { ...state, ...action.payload, loading: true }
        case CinemaActionTypes.FETCH_MOVIES:
            return { ...state, loading: true }
        case CinemaActionTypes.PAGINATION:
            return { ...state, currentMovies: action.payload, loading: false }
        case CinemaActionTypes.FETCH_MOVIES_ERROR:
            return { ...state, error: action.payload, loading: false }
        case CinemaActionTypes.SEARCH_CINEMA:
            return { ...state, sortedMovies: action.payload }
        default:
            return state
    }
}
