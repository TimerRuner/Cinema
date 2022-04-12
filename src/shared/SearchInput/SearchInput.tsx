import React, { useState } from "react"
import styles from "./searchinput.css"

export function SearchInput() {
    const [value, setValue] = useState("")
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search"
            className={styles.input}
        />
    )
}
