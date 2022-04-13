import axios from "../../plugins/axios"
import { Dispatch } from "react"
import { CinemaAction, CinemaActionTypes } from "../types/cinema"
import { sliceID } from "../../utils/js/sliceID"
import ids from "../../db/ids"

type fetching = (
    page: number,
    limit: number,
    id: string[],
    movies: any[]
) => void

export const initData = async () => {
    if (!localStorage.getItem("ids")) {
        localStorage.setItem("ids", JSON.stringify(ids))
    }
    if (!localStorage.getItem("films")) {
        const films = await Promise.all(ids.map((id) => axios.get(`/?i=${id}`)))
        localStorage.setItem("films", JSON.stringify(films))
    }
    const idsFilms = localStorage.getItem("ids")
    const allMovies = localStorage.getItem("films")

    return {
        id: JSON.parse(idsFilms || "[]"),
        movies: JSON.parse(allMovies || "[]"),
    }
}

export const initCinema = () => {
    return async (dispatch: Dispatch<CinemaAction>) => {
        try {
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

export const fetchCinema: fetching = (
    page = 1,
    limit = 12,
    ids = [],
    movies = []
) => {
    const slicedID = sliceID(ids)(page, limit)

    return async (dispatch: Dispatch<CinemaAction>) => {
        try {
            dispatch({ type: CinemaActionTypes.FETCH_MOVIES })
            const response = slicedID.map((id) =>
                movies.find((item) => item.imdbID === id)
            )

            dispatch({
                type: CinemaActionTypes.FETCH_MOVIES_SUCCESS,
                payload: response,
            })
        } catch (error) {
            dispatch({
                type: CinemaActionTypes.FETCH_MOVIES_ERROR,
                payload: String(error),
            })
        }
    }
}
