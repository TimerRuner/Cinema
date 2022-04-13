import { AlertAction, AlertActionTypes, IAlertState } from "../types/alert"

const initialState: IAlertState = {
    text: "",
    type: "",
    visible: false,
}

export const alertReducer = (
    state: IAlertState = initialState,
    action: AlertActionTypes
): IAlertState => {
    switch (action.type) {
        case AlertAction.SHOW_ALERT:
            return { ...state, ...action.payload, visible: true }
        case AlertAction.HIDE_ALERT:
            return { ...state, visible: false, type: "", text: "" }
        default:
            return state
    }
}
