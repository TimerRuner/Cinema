import React, { useEffect } from "react"
import styles from "./cardlist.css"
import { useTypeSelector } from "../../hooks/useTypeSelector"
import { useActions } from "../../hooks/useAction"
import { Card } from "./Card/Card"
import { AppBg } from "../AppBg"

export function CardList() {
    const { id, movies, currentPage, perPage, loading } = useTypeSelector(
        (state) => state.cinema
    )
    const { fetchCinema } = useActions()

    useEffect(() => {
        fetchCinema(currentPage, perPage, id)
    }, [currentPage, id])

    return (
        <div className={styles.cardList}>
            <div className="container">
                <div className={styles.cardList__content}>
                    <h2 className={styles.cardList__title}>IMDB Top 250</h2>
                    <div className={styles.cardList__wrapper}>
                        {loading && <div>Loading...</div>}
                        {!movies.length && <div>No posts</div>}
                        {movies.map(
                            ({ Title, imdbID, Poster, Year }, index) => (
                                <Card
                                    key={index}
                                    id={imdbID}
                                    title={Title}
                                    src={Poster}
                                    year={Year}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
            <AppBg />
        </div>
    )
}