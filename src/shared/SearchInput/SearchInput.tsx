import React, { useEffect, useMemo, useState } from "react"
import styles from "./searchinput.css"
import { useActions } from "../../hooks/useAction"
import { useTypeSelector } from "../../hooks/useTypeSelector"

export function SearchInput() {
    const { searchCinema } = useActions()
    const { movies } = useTypeSelector((state) => state.cinema)
    const [searchQuery, setSearchQuery] = useState("")

    const sortedCinema = useMemo(() => {
        if (searchQuery) {
            return [...movies].filter((movie) =>
                movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
            )
        }
        return movies
    }, [searchQuery, movies])

    useEffect(() => {
        searchCinema(sortedCinema)
    }, [sortedCinema])

    return (
        <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className={styles.input}
        />
    )
}
