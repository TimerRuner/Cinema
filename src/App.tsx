import React from "react"
import { hot } from "react-hot-loader/root"
import "./main.global.css"
import { Layout } from "./shared/Layout"
import { Header } from "./shared/Header"
import { CardList } from "./shared/CardList"
import { Provider } from "react-redux"
import { store } from "./store"

export function AppCopmonent() {
    return (
        <Provider store={store}>
            <Layout>
                <Header />
                <CardList />
            </Layout>
        </Provider>
    )
}

export const App = hot(() => <AppCopmonent />)
