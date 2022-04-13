export interface CinemaState {
    id: Array<string>
    movies: Array<any>
    currentMovies: any[]
    currentPage: number
    perPage: number
    error: string
    loading: boolean
}
export interface InitCinemaType {
    id: string[]
    movies: any[]
}

export enum CinemaActionTypes {
    FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS",
    FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR",
    FETCH_MOVIES = "FETCH_MOVIES",
    INIT_CINEMA = "INIT_CINEMA",
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

interface InitCinema {
    type: CinemaActionTypes.INIT_CINEMA
    payload: InitCinemaType
}

export type CinemaAction =
    | FetchCinemaSuccessAction
    | FetchCinemaErrorAction
    | FetchCinemaAction
    | InitCinema
