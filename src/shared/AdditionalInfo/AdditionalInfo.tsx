import React from "react"
import styles from "./additionalinfo.css"

interface IadditionalInfoProps {
    info: string[]
}

export function AdditionalInfo({ info }: IadditionalInfoProps) {
    return (
        <div className={styles.additional}>
            {info.map((item) => (
                <div className={styles.additional_info}>{item}</div>
            ))}
        </div>
    )
}
