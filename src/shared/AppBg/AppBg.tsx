import React from "react"
import styles from "./appbg.css"
import { useTypeSelector } from "../../hooks/useTypeSelector"

export function AppBg() {
    const { src } = useTypeSelector((state) => state.bg)

    return (
        <div
            className={styles.appBg}
            style={{ backgroundImage: `url(${src})` }}
        ></div>
    )
}
