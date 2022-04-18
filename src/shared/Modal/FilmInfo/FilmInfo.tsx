import React, { useEffect, useState } from "react"
import styles from "./filminfo.css"
import { useParams } from "react-router-dom"
import { useTypeSelector } from "../../../hooks/useTypeSelector"
import { findFilm } from "../../../utils/js/findFilm"
import { getInputConfig, IValidation } from "../../../config/configInputs"
import { Input } from "../../../UI/Input"
import { useNavigate } from "react-router-dom"
import { useActions } from "../../../hooks/useAction"
import { isEmpty } from "../../../utils/js/isObjectEmpty"

interface IFilmInfoProps {
    isOtherModal?: boolean
}

export function FilmInfo({ isOtherModal }: IFilmInfoProps) {
    const { id } = useParams()
    const { movies } = useTypeSelector((state) => state.cinema)
    const closeInfoModal = useNavigate()
    const { editFilm, show } = useActions()

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

    const closeModalHandler = () => {
        if (isOtherModal) {
            closeInfoModal(`/show/${id}`)
        } else {
            closeInfoModal("/")
        }
    }

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

    function onChangeHandler(
        e: React.ChangeEvent<HTMLInputElement>,
        controlName: string
    ) {
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

    function onChangeTextarea(
        e: React.ChangeEvent<HTMLTextAreaElement>,
        controlName: string
    ) {
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
                    size={control.size ? control.size : ""}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={(e) => onChangeHandler(e, controlName)}
                    onChangeTextarea={(e) => onChangeTextarea(e, controlName)}
                />
            )
        })
    }

    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const editedFilm = config.formControls
        if (id) {
            /* Edit function */

            const newMovies = movies.map((movie) => {
                if (movie.imdbID === id) {
                    show(`Edited film: ${movie.Title}`, "success")
                    for (let prop in movie) {
                        if (editedFilm[prop]) {
                            movie[prop] = editedFilm[prop].value
                        }
                    }

                    return movie
                } else {
                    return movie
                }
            })

            isEmpty(newMovies) ? editFilm(movies) : editFilm(newMovies)
            localStorage.setItem("films", JSON.stringify(newMovies))
            closeModalHandler()
        } else {
            /* Add function */
            let newFilm: { [key in string]: any } = {}
            const imdbID = String(new Date().valueOf())
            const currentAddInfo = config.formControls
            for (let prop in currentAddInfo) {
                newFilm[prop] = currentAddInfo[prop].value
            }
            newFilm["imdbID"] = imdbID
            movies.push(newFilm)
            localStorage.setItem("films", JSON.stringify(movies))
            editFilm(movies)
            closeInfoModal("/")
            /* Додати сповіщення про створення нового фільму */
            show(`Added new film: ${newFilm.Title}`, "success")
        }
    }

    const poster = config.formControls.Poster?.value
    return (
        <div className={styles.filmInfo}>
            <div className={styles.filmPoster}>
                <img src={poster} alt="poster" />
            </div>
            <form action="#" onSubmit={submitHandler}>
                {render()}
                <div className={styles.form_buttons}>
                    <button
                        onClick={closeModalHandler}
                        className={styles.form_button}
                    >
                        Cancel
                    </button>
                    <button
                        className={styles.form_button}
                        disabled={!config.isFormValid}
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
