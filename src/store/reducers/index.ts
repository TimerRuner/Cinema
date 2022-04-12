import { combineReducers } from "redux"
import { cinemaReducer } from "./cinemaReducer"
import { bgReducer } from "./bgReducer"

export const rootReducer = combineReducers({
    cinema: cinemaReducer,
    bg: bgReducer,
})

export type RootState = ReturnType<typeof rootReducer>
