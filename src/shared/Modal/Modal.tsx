import React, { useRef, useState } from "react"
import styles from "./modal.css"
import { useNavigate } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"

interface IModalProps {
    children?: React.ReactNode
    name: string
}

export function Modal({ children, name }: IModalProps) {
    const cleanShow = useNavigate()
    const modal = useRef<HTMLDivElement>(null)
    const close = useRef<HTMLDivElement>(null)
    const closeModalClickHandler = (e: React.SyntheticEvent) => {
        if (e.target instanceof Node && close.current?.contains(e.target)) {
            cleanShow("/")
        } else if (
            e.target instanceof Node &&
            !modal.current?.contains(e.target)
        ) {
            cleanShow("/")
        }
    }

    return (
        <div className={styles.overlay} onClick={closeModalClickHandler}>
            <div className={styles.modal} ref={modal}>
                <div className={styles.modal__header}>
                    <span className={styles.modal__name}>{name}</span>
                    <span className={styles.modal__close} ref={close}>
                        &#128473;
                    </span>
                </div>
                <div className={styles.modal__content}>{children}</div>
            </div>
        </div>
    )
}
