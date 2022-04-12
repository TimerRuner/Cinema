export interface BgState {
    src: string
}

export enum BgActionType {
    CHANGE_BG = "CHANGE_BG",
}

interface ChangeBgAction {
    type: BgActionType.CHANGE_BG
    payload: string
}

export type BgActions = ChangeBgAction
