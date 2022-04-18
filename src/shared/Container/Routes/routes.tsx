import React from "react"
import { Route } from "react-router-dom"
import { Alert } from "../../Alert"
import { Auth } from "../../Auth"
import { AuthForm } from "../../Auth/AuthForm"
import { CardList } from "../../CardList"
import { Header } from "../../Header"
import { Layout } from "../../Layout"
import { Modal } from "../../Modal"
import { FilmInfo } from "../../Modal/FilmInfo"
import { ViewFilm } from "../../Modal/ViewFilm"

export const pages = [
    <Route
        path="/"
        element={
            <Layout>
                <Header />
                <CardList />
                <Alert />
            </Layout>
        }
    />,
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
    />,
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
    />,
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
    />,
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
    />,
]

export const auth = [
    <Route
        path="/"
        element={
            <Auth>
                <AuthForm isLogin={true} />
                <Alert timeout={true} />
            </Auth>
        }
    />,
    <Route
        path="/register"
        element={
            <Auth>
                <AuthForm isLogin={false} />
                <Alert timeout={true} />
            </Auth>
        }
    />,
    <Route
        path="*"
        element={
            <Auth>
                <AuthForm isLogin={true} />
                <Alert timeout={true} />
            </Auth>
        }
    />,
]
