import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addCompany } from 'redux/mainTableReducer'
import { Button } from 'components/common/Button'
import { Step, useStep } from './useStep'
import { EMAIL_REGEXP } from 'utils/patterns'
import { CompanyDataWithoutId } from 'types/core'

import styles from './styles.module.css'

interface AddingFormProps {
    onCloseForm: () => void
}

export const AddingForm: FC<AddingFormProps> = ({ onCloseForm }) => {
    const { step, isFirstStep, isLastStep, nextStep, prevStep } = useStep()
    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors },
    } = useForm<CompanyDataWithoutId>()
    const dispatch = useDispatch()

    const onNext = async () => {
        if (step === Step.InvoiceAddress) {
            const isValidateSuccess = await trigger(
                [
                    'company',
                    'name',
                    'additional',
                    'street',
                    'postalCode',
                    'country',
                ],
                { shouldFocus: true }
            )
            if (isValidateSuccess) nextStep()
            return
        }

        if (step === Step.BankData) {
            const isValidateSuccess = await trigger(
                ['IBAN', 'BIC', 'bankName'],
                { shouldFocus: true }
            )
            if (isValidateSuccess) nextStep()
            return
        }

        if (step === Step.Contact) {
            handleSubmit((formData) => {
                dispatch(addCompany(formData))
                onCloseForm()
            })()
        }
    }

    return (
        <div className={styles.addingForm}>
            <div className={styles.formContent}>
                {step === Step.InvoiceAddress ? (
                    <>
                        <h3>Invoice Address</h3>
                        <div className={styles.formFields}>
                            <label
                                htmlFor="company"
                                className={
                                    errors.company ? styles.error : undefined
                                }
                            >
                                Company *
                            </label>
                            <input
                                type="text"
                                {...register('company', { required: true })}
                            />
                            <label
                                htmlFor="name"
                                className={
                                    errors.name ? styles.error : undefined
                                }
                            >
                                Name *
                            </label>
                            <input
                                type="text"
                                {...register('name', { required: true })}
                            />
                            <label
                                htmlFor="additional"
                                className={
                                    errors.additional ? styles.error : undefined
                                }
                            >
                                Additional
                            </label>
                            <input type="text" {...register('additional')} />
                            <label
                                htmlFor="street"
                                className={
                                    errors.street ? styles.error : undefined
                                }
                            >
                                Street
                            </label>
                            <input type="text" {...register('street')} />
                            <label
                                htmlFor="postalCode"
                                className={
                                    errors.postalCode ? styles.error : undefined
                                }
                            >
                                Postal Code
                            </label>
                            <input type="text" {...register('postalCode')} />
                            <label
                                htmlFor="country"
                                className={
                                    errors.country ? styles.error : undefined
                                }
                            >
                                Country
                            </label>
                            <select {...register('country')}>
                                <option value="USA">USA</option>
                                <option value="Ukraine">Ukraine</option>
                            </select>
                        </div>
                    </>
                ) : null}

                {step === Step.BankData ? (
                    <>
                        <h3>Bank Data</h3>
                        <div className={styles.formFields}>
                            <label
                                htmlFor="IBAN"
                                className={
                                    errors.IBAN ? styles.error : undefined
                                }
                            >
                                IBAN *
                            </label>
                            <input
                                type="text"
                                {...register('IBAN', { required: true })}
                            />
                            <label
                                htmlFor="BIC"
                                className={
                                    errors.BIC ? styles.error : undefined
                                }
                            >
                                BIC *
                            </label>
                            <input
                                type="text"
                                {...register('BIC', { required: true })}
                            />
                            <label
                                htmlFor="bankName"
                                className={
                                    errors.bankName ? styles.error : undefined
                                }
                            >
                                Bank name *
                            </label>
                            <input
                                type="text"
                                {...register('bankName', { required: true })}
                            />
                        </div>
                    </>
                ) : null}

                {step === Step.Contact ? (
                    <>
                        <h3>Contact</h3>
                        <div className={styles.formFields}>
                            <label
                                htmlFor="fax"
                                className={
                                    errors.fax ? styles.error : undefined
                                }
                            >
                                Fax
                            </label>
                            <input type="text" {...register('fax')} />
                            <label
                                htmlFor="email"
                                className={
                                    errors.email ? styles.error : undefined
                                }
                            >
                                E-mail
                            </label>
                            <input
                                type="email"
                                {...register('email', {
                                    pattern: EMAIL_REGEXP,
                                })}
                            />
                            <label
                                htmlFor="birthday"
                                className={
                                    errors.birthday ? styles.error : undefined
                                }
                            >
                                Birthday
                            </label>
                            <input type="date" {...register('birthday')} />
                            <label
                                htmlFor="homepage"
                                className={
                                    errors.homepage ? styles.error : undefined
                                }
                            >
                                Homepage
                            </label>
                            <input type="text" {...register('homepage')} />
                        </div>
                    </>
                ) : null}
            </div>

            <div className={styles.formButtons}>
                <Button onClick={onNext}>{isLastStep ? 'Save' : 'Next'}</Button>

                {!isFirstStep ? (
                    <Button variant="outline" onClick={prevStep}>
                        Previous
                    </Button>
                ) : null}

                <Button variant="outline" onClick={onCloseForm}>
                    Cancel
                </Button>
            </div>
        </div>
    )
}
