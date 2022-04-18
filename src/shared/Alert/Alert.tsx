import React, { useState } from "react"
import styles from "./alert.css"
import { useTypeSelector } from "../../hooks/useTypeSelector"
import { CSSTransition } from "react-transition-group"
import { useActions } from "../../hooks/useAction"

interface IAlertProps {
    timeout?: boolean
}

export function Alert({ timeout }: IAlertProps) {
    const { text, type, visible } = useTypeSelector((state) => state.alert)
    const { hide } = useActions()
    let time: NodeJS.Timeout | null = null

    if (timeout && visible) {
        if (time) {
            clearTimeout(time)
        }
        time = setTimeout(() => {
            hide()
        }, 5000)
    }

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
