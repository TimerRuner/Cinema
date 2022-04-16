import React, { useState } from "react"
import styles from "./buttons.css"
import { Button } from "../../UI/Button"
import { DeleteModal } from "../DeleteModal/DeleteModal"
import { useNavigate } from "react-router-dom"

interface IButtonsProps {
    identifire: string
    isOtherModal?: boolean
}

export function Buttons({ identifire, isOtherModal }: IButtonsProps) {
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const openEditModal = useNavigate()

    const removeHandler = (e: React.SyntheticEvent) => {
        e.stopPropagation()
        setOpenDeleteModal(true)
    }
    const editHandler = (e: React.SyntheticEvent) => {
        e.stopPropagation()
        if (isOtherModal) {
            openEditModal(`/show/edit/${identifire}`)
        } else {
            openEditModal(`/edit/${identifire}`)
        }
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
