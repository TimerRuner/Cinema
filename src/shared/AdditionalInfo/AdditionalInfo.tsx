import React from "react"
import styles from "./additionalinfo.css"

interface IadditionalInfoProps {
    info: string[]
}

export function AdditionalInfo({ info }: IadditionalInfoProps) {
    return (
        <div className={styles.additional}>
            {info.map((item, index) => (
                <div className={styles.additional_info} key={index}>
                    {item}
                </div>
            ))}
        </div>
    )
}
