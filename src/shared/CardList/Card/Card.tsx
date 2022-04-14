import React, { useEffect } from "react"
import styles from "./card.css"
import { EColors, Text } from "../../Text"
import { Buttons } from "../../Buttons"
import { useActions } from "../../../hooks/useAction"

interface ICardProps {
    title: string
    src: string
    id: string
    year: string
}

export function Card({ title, src, id, year }: ICardProps) {
    const { changeBg } = useActions()
    const hoverHandler = (src: string): void => {
        changeBg(src)
    }
    return (
        <div className={styles.card} onMouseEnter={() => hoverHandler(src)}>
            <div className={styles.card__content}>
                <img src={src} className={styles.card__bg} />
                <div className={styles.card__wrapper}>
                    <div className={styles.card__content}>
                        <h2 className={styles.card__title}>
                            <Text size={20} color={EColors.white}>
                                {title}
                            </Text>
                        </h2>
                        <span className={styles.card__year}>
                            <Text size={16} color={EColors.white}>
                                {year}
                            </Text>
                        </span>
                    </div>
                    <Buttons identifire={id} />
                </div>
            </div>
        </div>
    )
}
