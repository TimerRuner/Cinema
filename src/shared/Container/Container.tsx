import React, { useEffect, useState } from "react"
import { render } from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useIsMounted } from "../../hooks/isMounted"
import { useTypeSelector } from "../../hooks/useTypeSelector"
import styles from "./container.css"
import { auth, pages } from "./Routes/routes"
import { useActions } from "../../hooks/useAction"

export function Container() {
    const { autoLogin } = useActions()
    const [isMounted] = useIsMounted()
    const { token } = useTypeSelector((store) => store.auth)
    const [routers, setRouters] = useState<any[]>([])

    useEffect(() => {
        autoLogin()
    }, [])

    useEffect(() => {
        if (token !== "") {
            setRouters(pages)
        } else {
            setRouters(auth)
        }
    }, [token])

    return (
        <div>
            {isMounted && (
                <BrowserRouter>
                    <Routes>{routers.map((route) => route)}</Routes>
                </BrowserRouter>
            )}
        </div>
    )
}
