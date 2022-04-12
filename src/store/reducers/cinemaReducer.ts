import { CinemaState, CinemaAction, CinemaActionTypes } from "../types/cinema"
import ids from "../../db/ids"

const initialState: CinemaState = {
    id: ids,
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
        case CinemaActionTypes.FETCH_MOVIES:
            return { ...state, loading: true }
        case CinemaActionTypes.FETCH_MOVIES_SUCCESS:
            return { ...state, movies: action.payload, loading: false }
        case CinemaActionTypes.FETCH_MOVIES_ERROR:
            return { ...state, error: action.payload, loading: false }
        default:
            return state
    }
}
