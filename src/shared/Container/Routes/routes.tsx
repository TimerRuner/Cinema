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
    {
        path: "/",
        element: (
            <Layout>
                <Header />
                <CardList />
            </Layout>
        ),
    },
    {
        path: "*",
        element: (
            <Layout>
                <Header />
                <CardList />
            </Layout>
        ),
    },
    {
        path: "/show/:id",
        element: (
            <Layout>
                <Header />
                <CardList />
                <Modal name="Show Info">
                    <ViewFilm />
                </Modal>
            </Layout>
        ),
    },
    {
        path: "/edit/:id",
        element: (
            <Layout>
                <Header />
                <CardList />
                <Modal name="Edit Info">
                    <FilmInfo />
                </Modal>
            </Layout>
        ),
    },
    {
        path: "/show/edit/:id",
        element: (
            <Layout>
                <Header />
                <CardList />
                <Modal isOtherModal={true} name="Edit Info">
                    <FilmInfo isOtherModal={true} />
                </Modal>
            </Layout>
        ),
    },
    {
        path: "/add-film",
        element: (
            <Layout>
                <Header />
                <CardList />
                <Modal name="Add New Film">
                    <FilmInfo />
                </Modal>
            </Layout>
        ),
    },
]

export const auth = [
    {
        path: "/",
        element: (
            <Auth>
                <AuthForm isLogin={true} />
            </Auth>
        ),
    },
    {
        path: "/register",
        element: (
            <Auth>
                <AuthForm isLogin={false} />
            </Auth>
        ),
    },
    {
        path: "*",
        element: (
            <Auth>
                <Auth>
                    <AuthForm isLogin={true} />
                </Auth>
            </Auth>
        ),
    },
]
