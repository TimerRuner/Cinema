import React from "react"
import styles from "./button.css"

interface IButtonProps {
    children: string
}

export function Button({ children }: IButtonProps) {
    return <button className={styles.button}>{children}</button>
}
