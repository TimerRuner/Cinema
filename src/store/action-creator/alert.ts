import { Dispatch } from "react"
import { AlertAction, AlertActionTypes } from "../types/alert"

let time: NodeJS.Timeout | null = null

export const show = (text: string, type: string = "warning") => {
    return (dispatch: Dispatch<AlertActionTypes>) => {
        dispatch({ type: AlertAction.SHOW_ALERT, payload: { text, type } })
        if (time) {
            clearTimeout(time)
        }
        time = setTimeout(() => {
            dispatch({ type: AlertAction.HIDE_ALERT })
        }, 5000)
    }
}

export const hide = () => ({
    type: AlertAction.HIDE_ALERT,
})
