import React from 'react'
import { Header } from 'components/Header'
import { CompaniesTable } from 'components/CompaniesTable'

import styles from './styles.module.css'

export const App = () => {
    return (
        <div className={styles.app}>
            <Header />
            <main>
                <CompaniesTable />
            </main>
        </div>
    )
}
