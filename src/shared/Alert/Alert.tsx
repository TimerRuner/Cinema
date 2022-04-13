import React, { useState } from "react"
import styles from "./alert.css"
import { useTypeSelector } from "../../hooks/useTypeSelector"
import { CSSTransition } from "react-transition-group"

export function Alert() {
    const { text, type, visible } = useTypeSelector((state) => state.alert)
    return (
        <CSSTransition
            classNames="alert"
            timeout={500}
            in={visible}
            mountOnEnter
            unmountOnExit
        >
            <div className={`${styles.alert} ${type}`}>{text}</div>
        </CSSTransition>
    )
}
