import React, { useEffect, useState } from "react"
import styles from "./filminfo.css"
import { useParams } from "react-router-dom"
import { useTypeSelector } from "../../../hooks/useTypeSelector"
import { findFilm } from "../../../utils/js/findFilm"
import { getInputConfig, IValidation } from "../../../config/configInputs"
import { Input } from "../../../UI/Input"

export function FilmInfo() {
    const { id } = useParams()
    const { movies } = useTypeSelector((state) => state.cinema)

    let configInput = null
    if (id) {
        const film = findFilm(id, movies)
        configInput = getInputConfig(film, true)
    } else {
        configInput = getInputConfig()
    }
    const [config, setConfig] = useState(configInput)

    useEffect(() => {
        if (id) {
            const film = findFilm(id, movies)
            configInput = getInputConfig(film, true)
            setConfig(configInput)
        } else {
            configInput = getInputConfig()
            setConfig(configInput)
        }
    }, [movies])

    const validateControl = (value: string, validation: IValidation) => {
        if (!validation) {
            return true
        }

        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== "" && isValid
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
        const formControls = { ...config.formControls }

        const control = { ...config.formControls[controlName] }
        control.value = e.target.value
        control.touched = true
        control.valid = validateControl(control.value, control.validation)

        if (id) {
            Object.keys(formControls).map((controlName) => {
                const controlValid = formControls[controlName]
                const value = controlValid.value
                controlValid.valid = validateControl(
                    value,
                    controlValid.validation
                )
            })
        }

        formControls[controlName] = control

        let isFormValid = true

        Object.keys(formControls).forEach((name) => {
            isFormValid = formControls[name].valid && isFormValid
        })

        setConfig({ isFormValid, formControls })
    }

    const render = () => {
        return Object.keys(config.formControls).map((controlName, index) => {
            const control = config.formControls[controlName]
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
        })
    }

    const poster = config.formControls.poster.Poster
    return (
        <div className={styles.filmInfo}>
            <div className={styles.filmPoster}>
                <img src={poster} alt="poster" />
            </div>
            <form action="#">
                {render()}
                <div className={styles.form_buttons}>
                    <button className={styles.form_button}>Cancel</button>
                    <button
                        className={styles.form_button}
                        disabled={!config.isFormValid}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
