import axios from "../../plugins/axios"
import { Dispatch } from "react"
import { CinemaAction, CinemaActionTypes } from "../types/cinema"
import { sliceID } from "../../utils/js/sliceID"

type fetching = (page: number, limit: number, id: string[]) => void

export const fetchCinema: fetching = (page = 1, limit = 12, ids = []) => {
    const slicedID = sliceID(ids)(page, limit)

    return async (dispatch: Dispatch<CinemaAction>) => {
        try {
            dispatch({ type: CinemaActionTypes.FETCH_MOVIES })
            const response = slicedID.map((id) => axios.get(`/?i=${id}`))
            const data = await Promise.all(response)
            dispatch({
                type: CinemaActionTypes.FETCH_MOVIES_SUCCESS,
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
