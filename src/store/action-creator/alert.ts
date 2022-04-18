import { Dispatch } from "react"
import { AlertAction, AlertActionTypes } from "../types/alert"

let time: NodeJS.Timeout | null = null

export const show = (text: string, type: string = "warning") => ({
    type: AlertAction.SHOW_ALERT,
    payload: { text, type },
})

export const hide = () => ({
    type: AlertAction.HIDE_ALERT,
})
