import React from "react"
import styles from "./input.css"

interface invalidProps {
    valid: boolean
    touched: boolean
    shouldValidate: boolean
}
interface IInputProps {
    type: string
    valid: boolean
    touched: boolean
    shouldValidate: boolean
    label: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    errorMessage: string
}

const isInvalid = ({
    valid,
    touched,
    shouldValidate,
}: invalidProps): boolean => {
    return !valid && shouldValidate && touched
}

export function Input({
    type,
    valid,
    touched,
    shouldValidate,
    label,
    value,
    onChange,
    errorMessage,
}: IInputProps) {
    const inputType = type || "text"
    const cls = [`input ${type}`]
    const htmlFor = `${inputType}-${Math.random()}`

    if (isInvalid({ valid, touched, shouldValidate })) {
        cls.push("invalid")
    }

    return (
        <div className={cls.join(" ")}>
            <label htmlFor={htmlFor}>{label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={value}
                onChange={onChange}
            />
            {isInvalid({ valid, touched, shouldValidate }) ? (
                <span>{errorMessage}</span>
            ) : null}
        </div>
    )
}
