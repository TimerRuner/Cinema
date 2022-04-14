import React, { useMemo } from "react"
import styles from "./pagination.css"

interface IPaginationProps {
    total: number
    current: number
    setPage: (t: number) => void
}

export function Pagination({ total, current, setPage }: IPaginationProps) {
    const pages: number[] = useMemo(() => {
        let pageArray = []
        for (let i = 1; i <= total; i++) {
            pageArray.push(i)
        }
        return pageArray
    }, [total])

    return (
        <div className={styles.pagination}>
            <div className="container">
                <div className={styles.pagination__wrapper}>
                    <button
                        onClick={() => setPage(current - 1)}
                        className={styles.start}
                        disabled={current === 1}
                    >
                        {"<<"}
                    </button>
                    <button
                        onClick={() => setPage(1)}
                        className={styles.toDestination}
                        disabled={current === 1}
                    >
                        1
                    </button>
                    <div className={styles.current}>
                        {current} / {total}
                    </div>
                    <button
                        onClick={() => setPage(total)}
                        className={styles.toDestination}
                        disabled={current === total}
                    >
                        {total}
                    </button>
                    <button
                        onClick={() => setPage(current + 1)}
                        className={styles.end}
                        disabled={current === total}
                    >
                        {">>"}
                    </button>
                </div>
            </div>
        </div>
    )
}
