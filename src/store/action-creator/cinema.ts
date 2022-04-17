import axios from "../../plugins/axios"
import { Dispatch } from "react"
import { CinemaAction, CinemaActionTypes } from "../types/cinema"
import { sliceMovie } from "../../utils/js/sliceID"
import ids from "../../db/ids"

type fetching = (page: number, limit: number, movies: any[]) => void

export const initData = async () => {
    if (!localStorage.getItem("ids")) {
        localStorage.setItem("ids", JSON.stringify(ids))
    }
    if (!localStorage.getItem("films")) {
        const films = await Promise.all(ids.map((id) => axios.get(`/?i=${id}`)))
        localStorage.setItem("films", JSON.stringify(films))
    }
    const idsFilms = JSON.parse(localStorage.getItem("ids") || "[]")
    const allMovies = JSON.parse(localStorage.getItem("films") || "[]")

    return {
        id: idsFilms,
        movies: allMovies,
    }
}

export const initCinema = () => {
    return async (dispatch: Dispatch<CinemaAction>) => {
        try {
            dispatch({ type: CinemaActionTypes.FETCH_MOVIES })
            const data = await initData()
            dispatch({
                type: CinemaActionTypes.INIT_CINEMA,
                payload: data,
            })
        } catch (error) {
            dispatch({
                type: CinemaActionTypes.FETCH_MOVIES_ERROR,
                payload: String(error),
            })
        }
    }
}

export const fetchCinema: fetching = (page = 1, limit = 12, movies = []) => {
    const slicedID = sliceMovie(movies)(page, limit)

    return {
        type: CinemaActionTypes.PAGINATION,
        payload: slicedID,
    }
}

export const searchCinema = (movies: any[]) => ({
    type: CinemaActionTypes.SEARCH_CINEMA,
    payload: movies,
})

export const addNewIdAndMovies = (data: { id: string[]; movies: any[] }) => ({
    type: CinemaActionTypes.INIT_CINEMA,
    payload: data,
})

export const editFilm = (film: any[]) => ({
    type: CinemaActionTypes.EDIT_FILM,
    payload: film,
})
