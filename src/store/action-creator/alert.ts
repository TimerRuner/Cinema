import { Dispatch } from "react"
import { AlertAction, AlertActionTypes } from "../types/alert"

export const show = (text: string, type: string = "warning") => {
    return (dispatch: Dispatch<AlertActionTypes>) => {
        dispatch({ type: AlertAction.SHOW_ALERT, payload: { text, type } })
        setTimeout(() => {
            dispatch({ type: AlertAction.HIDE_ALERT })
        }, 5000)
    }
}
