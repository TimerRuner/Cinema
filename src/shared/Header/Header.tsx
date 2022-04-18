import React, { useState } from "react"
import styles from "./header.css"
import { Button } from "../../UI/Button"
import { SearchInput } from "../SearchInput"
import { useActions } from "../../hooks/useAction"
import { useNavigate } from "react-router-dom"

export function Header() {
    const showAddModal = useNavigate()
    const [dropOpen, setDropOpen] = useState(false)
    const { logout } = useActions()
    const clickHandler = () => {
        showAddModal("/add-film")
        setDropOpen(false)
    }

    const toggleDropHandler = () => {
        setDropOpen(!dropOpen)
    }
    const logoutHandler = () => {
        logout()
        setDropOpen(false)
    }

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__wrapper}>
                    <a href="/" className={styles.header__logo}>
                        Movie DB
                    </a>
                    <SearchInput />
                    <div
                        className={`${styles.header__buttons} ${
                            dropOpen ? styles._activeDrop : ""
                        }`}
                    >
                        <Button onClick={() => clickHandler()}>
                            Add Movie
                        </Button>
                        <Button onClick={logoutHandler}>Log out</Button>
                    </div>
                    <div
                        className={`${styles.header__burger} ${
                            dropOpen ? styles.active : ""
                        }`}
                        onClick={() => toggleDropHandler()}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    )
}
