import React, { useEffect } from "react"
import { hot } from "react-hot-loader/root"
import "./main.global.css"
import { Layout } from "./shared/Layout"
import { Header } from "./shared/Header"
import { CardList } from "./shared/CardList"
import { Provider } from "react-redux"
import { store } from "./store"
import { Alert } from "./shared/Alert"
import { initCinema } from "./store/action-creator/cinema"

export function AppCopmonent() {
    return (
        <Provider store={store}>
            <Layout>
                <Header />
                <CardList />
                <Alert />
            </Layout>
        </Provider>
    )
}

export const App = hot(() => <AppCopmonent />)
