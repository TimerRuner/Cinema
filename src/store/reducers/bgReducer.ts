import { BgState, BgActions, BgActionType } from "../types/bg"

const initialState: BgState = {
    src: "",
}

export const bgReducer = (
    state: BgState = initialState,
    action: BgActions
): BgState => {
    switch (action.type) {
        case BgActionType.CHANGE_BG:
            return { ...state, src: action.payload }
        default:
            return state
    }
}
