import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCompany } from 'redux/mainTableReducer'
import { useCompanies } from './useCompanies'
import { TrashIcon } from 'icons/Trash'

import styles from './styles.module.css'

export const CompaniesTable = () => {
    const companies = useCompanies()
    const dispatch = useDispatch()

    return (
        <div className={styles.tableContainer}>
            <table className={styles.companiesTable}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Company</th>
                        <th>Name</th>
                        <th>Additional</th>
                        <th>Street</th>
                        <th>Postal Code</th>
                        <th>Country</th>
                        <th>IBAN</th>
                        <th>BIC</th>
                        <th>Bank Name</th>
                        <th>Fax</th>
                        <th>E-mail</th>
                        <th>Birthday</th>
                        <th>Homepage</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company) => (
                        <tr key={company.id}>
                            <td>
                                <TrashIcon
                                    style={{ cursor: 'pointer' }}
                                    onClick={() =>
                                        dispatch(removeCompany(company.id))
                                    }
                                />
                            </td>
                            <td>{company.company}</td>
                            <td>{company.name}</td>
                            <td>{company.additional}</td>
                            <td>{company.street}</td>
                            <td>{company.postalCode}</td>
                            <td>{company.country}</td>
                            <td>{company.IBAN}</td>
                            <td>{company.BIC}</td>
                            <td>{company.bankName}</td>
                            <td>{company.fax}</td>
                            <td>{company.email}</td>
                            <td>{company.birthday}</td>
                            <td>{company.homepage}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
