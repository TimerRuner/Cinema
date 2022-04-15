import React, { useEffect } from "react"
import { hot } from "react-hot-loader/root"
import "./main.global.css"
import { Layout } from "./shared/Layout"
import { Header } from "./shared/Header"
import { CardList } from "./shared/CardList"
import { Provider } from "react-redux"
import { store } from "./store"
import { Alert } from "./shared/Alert"
import { useIsMounted } from "./hooks/isMounted"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Modal } from "./shared/Modal"
import { ViewFilm } from "./shared/Modal/ViewFilm"

export function AppCopmonent() {
    const [isMounted] = useIsMounted()
    return (
        <Provider store={store}>
            {isMounted && (
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Layout>
                                    <Header />
                                    <CardList />
                                    <Alert />
                                </Layout>
                            }
                        />
                        <Route
                            path="/show/:id"
                            element={
                                <Layout>
                                    <Header />
                                    <CardList />
                                    <Alert />
                                    <Modal name="View Modal">
                                        <ViewFilm />
                                    </Modal>
                                </Layout>
                            }
                        />
                    </Routes>
                </BrowserRouter>
            )}
        </Provider>
    )
}

export const App = hot(() => <AppCopmonent />)
