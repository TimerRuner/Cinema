import React from "react"
import styles from "./header.css"
import { Button } from "../../UI/Button"
import { SearchInput } from "../SearchInput"
import { useActions } from "../../hooks/useAction"

export function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__wrapper}>
                    <a href="#" className={styles.header__logo}>
                        Movie DB
                    </a>
                    <SearchInput />
                    <Button>Add Movie</Button>
                </div>
            </div>
        </header>
    )
}
