import { BgActions, BgActionType } from "../types/bg"

export const changeBg = (src: string): BgActions => {
    return { type: BgActionType.CHANGE_BG, payload: src }
}
