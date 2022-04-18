import React, { useEffect } from "react"
import { hot } from "react-hot-loader/root"
import "./main.global.css"
import { Provider } from "react-redux"
import { store } from "./store"
import { Container } from "./shared/Container"

export function AppCopmonent() {
    return (
        <Provider store={store}>
            <Container />
        </Provider>
    )
}

export const App = hot(() => <AppCopmonent />)
