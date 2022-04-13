import { combineReducers } from "redux"
import { cinemaReducer } from "./cinemaReducer"
import { bgReducer } from "./bgReducer"
import { alertReducer } from "./alertReducer"

export const rootReducer = combineReducers({
    cinema: cinemaReducer,
    bg: bgReducer,
    alert: alertReducer,
})

export type RootState = ReturnType<typeof rootReducer>
