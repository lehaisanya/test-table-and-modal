import React, { useState } from 'react'
import { Button } from 'components/common/Button'
import { Modal } from 'components/common/Modal'
import { AddingForm } from 'components/AddingForm'

import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { addMockCompany } from 'redux/mainTableReducer'

export const Header = () => {
    const dispatch = useDispatch()
    const [isOpenModal, setOpenModal] = useState(false)

    const openModal = () => setOpenModal(true)
    const closeModal = () => setOpenModal(false)

    return (
        <header className={styles.header}>
            <Button onClick={openModal}>Add</Button>
            <Button
                onClick={() => {
                    dispatch(addMockCompany())
                }}
            >
                Add Mock
            </Button>
            <Modal display={isOpenModal} onClose={closeModal}>
                <AddingForm onCloseForm={closeModal} />
            </Modal>
        </header>
    )
}
