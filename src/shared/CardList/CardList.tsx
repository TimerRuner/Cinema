import React, { useEffect, useState } from "react"
import styles from "./cardlist.css"
import { useTypeSelector } from "../../hooks/useTypeSelector"
import { useActions } from "../../hooks/useAction"
import { Card } from "./Card/Card"
import { AppBg } from "../AppBg"
import { Pagination } from "../Pagination"
import { getTotalPage } from "../../utils/js/getTotalPage"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { Loader } from "../../UI/Loader"

export function CardList() {
    const { id, movies, currentMovies, sortedMovies, loading, error } =
        useTypeSelector((state) => state.cinema)
    const { fetchCinema, initCinema } = useActions()
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(12)
    const [totalPage, setTotalPage] = useState(0)

    useEffect(() => {
        initCinema()
    }, [])

    useEffect(() => {
        fetchCinema(currentPage, perPage, sortedMovies)
        setTotalPage(getTotalPage(sortedMovies.length, perPage))
    }, [currentPage, sortedMovies, movies, id])

    return (
        <div className={styles.cardList}>
            <div className="container">
                <div className={styles.cardList__content}>
                    <h2 className={styles.cardList__title}>IMDB Top 250</h2>
                    {loading && <Loader />}
                    {!currentMovies.length && (
                        <div className={styles.cardList__empty}>No posts</div>
                    )}
                    <TransitionGroup
                        component={"div"}
                        className={styles.cardList__wrapper}
                    >
                        {!error &&
                            !loading &&
                            currentMovies.map(
                                ({ Title, imdbID, Poster, Year }, index) => (
                                    <CSSTransition
                                        key={index}
                                        timeout={500}
                                        classNames="card"
                                    >
                                        <Card
                                            id={imdbID}
                                            title={Title}
                                            src={Poster}
                                            year={Year}
                                        />
                                    </CSSTransition>
                                )
                            )}
                    </TransitionGroup>
                </div>
            </div>
            <AppBg />
            {totalPage && currentMovies.length && (
                <Pagination
                    total={totalPage}
                    current={currentPage}
                    setPage={setCurrentPage}
                />
            )}
        </div>
    )
}
