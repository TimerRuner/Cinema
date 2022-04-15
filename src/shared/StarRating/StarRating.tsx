import React from "react"
import styles from "./starrating.css"

{
    /* <div className={`${styles.rating} ${styles.rating_set}`}>
<div className={styles.rating__body}>
    <div className={styles.rating__active}></div>
</div>
</div> */
}

interface IStarRatingProps {
    rating: number
}

export function StarRating({ rating }: IStarRatingProps) {
    return (
        <div className={styles.rating}>
            <div className={styles.rating__body}>
                <div
                    className={styles.rating__active}
                    style={{ width: `${rating}%` }}
                ></div>
                {/* <div className={styles.rating__items}>
                    <input className={styles.rating__item} />
                    <input className={styles.rating__item} />
                    <input className={styles.rating__item} />
                    <input className={styles.rating__item} />
                    <input className={styles.rating__item} />
                    <input className={styles.rating__item} />
                    <input className={styles.rating__item} />
                    <input className={styles.rating__item} />
                    <input className={styles.rating__item} />
                    <input className={styles.rating__item} />
                </div> */}
            </div>
            <div className={styles.rating__value}>{rating} / 100</div>
        </div>
    )
}
