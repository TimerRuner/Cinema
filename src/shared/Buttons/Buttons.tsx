import React, { useState } from "react"
import styles from "./buttons.css"
import { Button } from "../../UI/Button"
import { useTypeSelector } from "../../hooks/useTypeSelector"
import { DeleteModal } from "../DeleteModal/DeleteModal"

interface IButtonsProps {
    identifire: string
}

export function Buttons({ identifire }: IButtonsProps) {
    const [openDeleteModal, setOpenDeleteModal] = useState(false)

    const removeHandler = (id: string): void => {
        setOpenDeleteModal(true)
    }
    return (
        <div className={styles.buttons}>
            <Button>Edit</Button>
            <Button onClick={() => removeHandler(identifire)}>Remove</Button>
            <DeleteModal
                onOpen={openDeleteModal}
                setClose={setOpenDeleteModal}
                id={identifire}
            />
        </div>
    )
}
