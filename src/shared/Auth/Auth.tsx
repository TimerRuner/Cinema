import React from "react"
import styles from "./auth.css"

interface IAuthProps {
    children?: React.ReactNode
}

export function Auth({ children }: IAuthProps) {
    return <div className={styles.authpage}>{children}</div>
}
