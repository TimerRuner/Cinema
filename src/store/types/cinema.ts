export interface CinemaState {
    id: Array<string>
    movies: Array<any>
    currentMovies: any[]
    currentPage: number
    sortedMovies: any[]
    perPage: number
    error: string
    loading: boolean
}
export interface InitCinemaType {
    id: string[]
    movies: any[]
}

export enum CinemaActionTypes {
    PAGINATION = "PAGINATION",
    FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR",
    FETCH_MOVIES = "FETCH_MOVIES",
    INIT_CINEMA = "INIT_CINEMA",
    SEARCH_CINEMA = "SEARCH_CINEMA",
}

interface FetchCinemaAction {
    type: CinemaActionTypes.FETCH_MOVIES
}
interface FetchCinemaSuccessAction {
    type: CinemaActionTypes.PAGINATION
    payload: Array<any>
}
interface FetchCinemaErrorAction {
    type: CinemaActionTypes.FETCH_MOVIES_ERROR
    payload: string
}

interface SearchCinema {
    type: CinemaActionTypes.SEARCH_CINEMA
    payload: any[]
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
    | SearchCinema
