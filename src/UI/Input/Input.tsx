import React from "react"
import styles from "./input.css"

interface invalidProps {
    valid: boolean | null
    touched: boolean
    shouldValidate: boolean
}
interface IInputProps {
    type: string
    valid: boolean | null
    touched: boolean
    shouldValidate: boolean
    label: string
    value: string
    size?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeTextarea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    errorMessage: string
}

const isInvalid = ({
    valid,
    touched,
    shouldValidate,
}: invalidProps): boolean | null => {
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
    onChangeTextarea,
    size,
    errorMessage,
}: IInputProps) {
    const inputType = type || "text"
    const cls = [`input ${type}`]
    const htmlFor = `${inputType}-${Math.random()}`

    if (isInvalid({ valid, touched, shouldValidate })) {
        cls.push("invalid")
    }

    return (
        <div className={cls.join(" ")} data-size={size}>
            <label htmlFor={htmlFor}>{label}</label>
            {inputType === "textarea" ? (
                <textarea
                    id={htmlFor}
                    value={value}
                    onChange={onChangeTextarea}
                ></textarea>
            ) : (
                <input
                    type={inputType}
                    id={htmlFor}
                    value={value}
                    onChange={onChange}
                />
            )}

            {isInvalid({ valid, touched, shouldValidate }) ? (
                <span>{errorMessage}</span>
            ) : null}
        </div>
    )
}
