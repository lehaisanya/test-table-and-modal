import React, { ButtonHTMLAttributes, FC } from 'react'

import styles from './styles.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'solid' | 'outline'
}

export const Button: FC<ButtonProps> = ({
    variant = 'solid',
    children,
    ...props
}) => {
    const variantClassName = variant === 'solid' ? styles.solid : styles.outline

    return (
        <button
            type="button"
            className={styles.button + ' ' + variantClassName}
            {...props}
        >
            {children}
        </button>
    )
}
