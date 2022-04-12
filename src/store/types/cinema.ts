export interface CinemaState {
    id: Array<string>
    movies: Array<any>
    currentPage: number
    perPage: number
    error: string
    loading: boolean
}

export enum CinemaActionTypes {
    FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS",
    FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR",
    FETCH_MOVIES = "FETCH_MOVIES",
}

interface FetchCinemaAction {
    type: CinemaActionTypes.FETCH_MOVIES
}
interface FetchCinemaSuccessAction {
    type: CinemaActionTypes.FETCH_MOVIES_SUCCESS
    payload: Array<any>
}
interface FetchCinemaErrorAction {
    type: CinemaActionTypes.FETCH_MOVIES_ERROR
    payload: string
}

export type CinemaAction =
    | FetchCinemaSuccessAction
    | FetchCinemaErrorAction
    | FetchCinemaAction
