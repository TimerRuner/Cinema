import React, { useRef, useState } from "react"
import styles from "./modal.css"
import { useNavigate, useParams } from "react-router-dom"

interface IModalProps {
    children?: React.ReactNode
    name: string
    isOtherModal?: boolean
}

export function Modal({ children, name, isOtherModal }: IModalProps) {
    const cleanShow = useNavigate()
    const { id } = useParams()
    const modal = useRef<HTMLDivElement>(null)
    const close = useRef<HTMLDivElement>(null)
    const closeModalClickHandler = (e: React.SyntheticEvent) => {
        if (e.target instanceof Node && close.current?.contains(e.target)) {
            if (isOtherModal) {
                cleanShow(`/show/${id}`)
            } else {
                cleanShow("/")
            }
        } else if (
            e.target instanceof Node &&
            !modal.current?.contains(e.target)
        ) {
            if (isOtherModal) {
                cleanShow(`/show/${id}`)
            } else {
                cleanShow("/")
            }
        }
    }

    return (
        <div className={styles.overlay} onClick={closeModalClickHandler}>
            <div className={styles.modal} ref={modal}>
                <div className={styles.modal__header}>
                    <span className={styles.modal__name}>{name}</span>
                    <span className={styles.modal__close} ref={close}>
                        <img
                            src="/static/img/icons/close.svg"
                            alt="close-icon"
                        />
                    </span>
                </div>
                <div className={styles.modal__content}>{children}</div>
            </div>
        </div>
    )
}
