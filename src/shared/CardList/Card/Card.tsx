import React, { useEffect, useRef } from "react"
import styles from "./card.css"
import { EColors, Text } from "../../Text"
import { Buttons } from "../../Buttons"
import { useActions } from "../../../hooks/useAction"
import { useNavigate } from "react-router-dom"

interface ICardProps {
    title: string
    src: string
    id: string
    year: string
}

export function Card({ title, src, id, year }: ICardProps) {
    const buttons = useRef<HTMLDivElement>(null)
    const { changeBg } = useActions()
    const nav = useNavigate()

    const hoverHandler = (src: string): void => {
        changeBg(src)
    }
    const clickModalHandler = (e: React.SyntheticEvent) => {
        if (e.target instanceof Node && !buttons.current?.contains(e.target)) {
            nav(`/show/${id}`)
        }
    }

    return (
        <div
            className={styles.card}
            onMouseEnter={() => hoverHandler(src)}
            onClick={clickModalHandler}
        >
            <div className={styles.card__content}>
                <img src={src} className={styles.card__bg} />
                <div className={styles.card__wrapper}>
                    <div className={styles.card__wrapper_content}>
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
                    <div className={styles.buttons} ref={buttons}>
                        <Buttons identifire={id} />
                    </div>
                </div>
            </div>
        </div>
    )
}
