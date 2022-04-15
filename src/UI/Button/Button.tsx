import React from "react"
import styles from "./button.css"

interface IButtonProps {
    children: string
    onClick?: (e: React.SyntheticEvent) => void
}

export function Button({ children, onClick }: IButtonProps) {
    return (
        <button onClick={onClick} className={styles.button}>
            {children}
        </button>
    )
}
