import React, { useRef } from "react"
import ReactDOM from "react-dom"
import styles from "./deletemodal.css"
import { useIsMounted } from "../../hooks/isMounted"
import { CSSTransition } from "react-transition-group"
import { useTypeSelector } from "../../hooks/useTypeSelector"
import { useActions } from "../../hooks/useAction"
import { setLocalStorage } from "../../utils/js/setLocalStorage"

interface IDeleteModalProps {
    onOpen: boolean
    setClose: (b: boolean) => void
    id: string
}

export function DeleteModal({ onOpen, setClose, id }: IDeleteModalProps) {
    const { movies, id: ids } = useTypeSelector((state) => state.cinema)
    const title = movies.find((movie) => movie.imdbID === id)?.Title

    const { addNewIdAndMovies, show } = useActions()
    const [isMounted] = useIsMounted()
    const modal = useRef<HTMLDivElement>(null)
    let node = null
    if (isMounted) {
        node = document.getElementById("delete_modal")
    }
    if (!node) return null

    const closeClickHandler = (e: React.SyntheticEvent) => {
        if (e.target instanceof Node && !modal.current?.contains(e.target)) {
            setClose(false)
        }
    }

    const removeHandler = (id: string, title: string): void => {
        const newMovies = movies.filter((movie) => movie.imdbID !== id)
        const newId = ids.filter((item) => item !== id)

        setLocalStorage("films", newMovies)
        setLocalStorage("ids", newId)
        addNewIdAndMovies({ id: newId, movies: newMovies })
        setClose(false)
        show(`Deleted film ${title}`, "success")
    }

    return ReactDOM.createPortal(
        <CSSTransition
            in={onOpen}
            timeout={500}
            classNames="deleteModal"
            mountOnEnter
            unmountOnExit
        >
            <div className={styles.overlay} onClick={closeClickHandler}>
                <div className={styles.modal} ref={modal}>
                    <div className={styles.modal__wrapper}>
                        <h2 className={styles.modal__title}>
                            Do you really want to remove this film {title} ?
                        </h2>
                        <div className={styles.modal__buttons}>
                            <button
                                className={styles.modal__btn}
                                onClick={() => setClose(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className={styles.modal__btn}
                                onClick={() => removeHandler(id, title)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>,
        node
    )
}
