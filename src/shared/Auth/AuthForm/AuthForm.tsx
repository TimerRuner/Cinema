import React, { useState } from "react"
import { Button } from "../../../UI/Button"
import styles from "./authform.css"
import { Link } from "react-router-dom"
import {
    getAuthConfig,
    IAuthConfig,
    IValidationAuth,
} from "../../../config/configAuth"
import { Input } from "../../../UI/Input"
import { validateEmail } from "../../../utils/js/validateEmail"
import { useActions } from "../../../hooks/useAction"

interface IAuthFormProps {
    isLogin?: boolean
}

export function AuthForm({ isLogin }: IAuthFormProps) {
    const [configAuth, setConfigAuth] = useState<IAuthConfig>(getAuthConfig())
    const { auth } = useActions()

    const validateControl = (
        value: string,
        validation: IValidationAuth
    ): boolean | null => {
        if (!validation) {
            return true
        }

        let isValid: boolean | null = true

        if (validation.required) {
            isValid = value.trim() !== "" && isValid
        }
        if (validation.email) {
            isValid = validateEmail(value) && isValid
        }
        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    const onChangeHandler = (
        e: React.ChangeEvent<HTMLInputElement>,
        controlName: string
    ) => {
        const formControls = { ...configAuth.formControls }
        const control = { ...formControls[controlName] }

        control.value = e.target.value
        control.touched = true
        control.valid = validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid: boolean | null = true

        Object.keys(formControls).forEach((name) => {
            isFormValid = formControls[name].valid && isFormValid
        })

        setConfigAuth({ isFormValid, formControls })
    }

    const renderInputs = () => {
        return Object.keys(configAuth.formControls).map(
            (controlName, index) => {
                const control = configAuth.formControls[controlName]

                return (
                    <Input
                        key={controlName + index}
                        type={control.type}
                        value={control.value}
                        touched={control.touched}
                        valid={control.valid}
                        label={control.label}
                        shouldValidate={!!control.validation}
                        errorMessage={control.errorMessage}
                        onChange={(e) => onChangeHandler(e, controlName)}
                    />
                )
            }
        )
    }

    const loginHandler = () => {
        auth(
            configAuth.formControls.email.value,
            configAuth.formControls.password.value,
            true
        )
        setConfigAuth(getAuthConfig())
    }
    const registerHandler = () => {
        auth(
            configAuth.formControls.email.value,
            configAuth.formControls.password.value,
            false
        )
        setConfigAuth(getAuthConfig())
    }
    const resetHandler = () => {
        setConfigAuth(getAuthConfig())
    }

    return (
        <div className={styles.authform}>
            <div className={styles.auth_wrapper}>
                <div className={styles.auth_title}>
                    {isLogin ? "Login" : "Registration"}
                </div>
                <div className={styles.auth_inputs}>{renderInputs()}</div>
                <div className={styles.auth_buttons}>
                    {isLogin ? (
                        <button
                            onClick={loginHandler}
                            className={styles.auth_button}
                            disabled={!configAuth.isFormValid}
                        >
                            Login
                        </button>
                    ) : (
                        <button
                            onClick={registerHandler}
                            className={styles.auth_button}
                            disabled={!configAuth.isFormValid}
                        >
                            Register
                        </button>
                    )}
                    {isLogin ? (
                        <Link to={"/register"} onClick={resetHandler}>
                            To Register
                        </Link>
                    ) : (
                        <Link to={"/"} onClick={resetHandler}>
                            To Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}
