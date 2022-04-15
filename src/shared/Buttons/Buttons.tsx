import React, { useState } from "react"
import styles from "./buttons.css"
import { Button } from "../../UI/Button"
import { DeleteModal } from "../DeleteModal/DeleteModal"

interface IButtonsProps {
    identifire: string
}

export function Buttons({ identifire }: IButtonsProps) {
    const [openDeleteModal, setOpenDeleteModal] = useState(false)

    const removeHandler = (e: React.SyntheticEvent) => {
        e.stopPropagation()
        setOpenDeleteModal(true)
    }
    const editHandler = (e: React.SyntheticEvent) => {
        e.stopPropagation()
    }
    return (
        <div className={styles.buttons}>
            <Button onClick={editHandler}>Edit</Button>
            <Button onClick={removeHandler}>Remove</Button>
            <DeleteModal
                onOpen={openDeleteModal}
                setClose={setOpenDeleteModal}
                id={identifire}
            />
        </div>
    )
}
