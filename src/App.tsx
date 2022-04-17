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
import { FilmInfo } from "./shared/Modal/FilmInfo"
import { Auth } from "./shared/Auth/"
import { AuthForm } from "./shared/Auth/AuthForm"

let routers = (
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
                        <Modal name="Show Info">
                            <ViewFilm />
                        </Modal>
                    </Layout>
                }
            />
            <Route
                path="/edit/:id"
                element={
                    <Layout>
                        <Header />
                        <CardList />
                        <Alert />
                        <Modal name="Edit Info">
                            <FilmInfo />
                        </Modal>
                    </Layout>
                }
            />
            <Route
                path="/show/edit/:id"
                element={
                    <Layout>
                        <Header />
                        <CardList />
                        <Alert />
                        <Modal isOtherModal={true} name="Edit Info">
                            <FilmInfo isOtherModal={true} />
                        </Modal>
                    </Layout>
                }
            />
            <Route
                path="/add-film"
                element={
                    <Layout>
                        <Header />
                        <CardList />
                        <Alert />
                        <Modal name="Add New Film">
                            <FilmInfo />
                        </Modal>
                    </Layout>
                }
            />
        </Routes>
    </BrowserRouter>
)

export function AppCopmonent() {
    const [isMounted] = useIsMounted()

    if (true) {
        routers = (
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Auth>
                                <AuthForm isLogin={true} />
                                <Alert timeout={true} />
                            </Auth>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <Auth>
                                <AuthForm isLogin={false} />
                                <Alert timeout={true} />
                            </Auth>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <Auth>
                                <AuthForm isLogin={true} />
                                <Alert timeout={true} />
                            </Auth>
                        }
                    />
                </Routes>
            </BrowserRouter>
        )
    }

    return <Provider store={store}>{isMounted && routers}</Provider>
}

export const App = hot(() => <AppCopmonent />)
