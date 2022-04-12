export interface IAlertState {
    text: string
    type: string
    visible: boolean
}

export enum AlertAction {
    SHOW_ALERT = "SHOW_ALERT",
    HIDE_ALERT = "HIDE_ALERT",
}

interface AlertActionShow {
    type: AlertAction.SHOW_ALERT
    payload: { text: string; type: string }
}

interface AlertActionHide {
    type: AlertAction.HIDE_ALERT
}

export type AlertActionTypes = AlertActionShow | AlertActionHide
