import React, { FC, ReactNode } from 'react'
import { Portal } from 'components/common/Portal'
import { CrossIcon } from 'icons/Cross'

import styles from './styles.module.css'

interface ModalProps {
    display: boolean
    onClose: () => void
    children?: ReactNode
}

export const Modal: FC<ModalProps> = ({ display, onClose, children }) => {
    if (!display) return null

    return (
        <Portal>
            <div className={styles.container} onClick={onClose}>
                <div
                    className={styles.modal}
                    onClick={(event) => event.stopPropagation()}
                >
                    <div className={styles.closeIcon} onClick={onClose}>
                        <CrossIcon />
                    </div>
                    {children}
                </div>
            </div>
        </Portal>
    )
}
