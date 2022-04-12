import React from "react"
import styles from "./buttons.css"
import { Button } from "../../UI/Button"

export function Buttons() {
    return (
        <div className={styles.buttons}>
            <Button>Edit</Button>
            <Button>Remove</Button>
        </div>
    )
}
