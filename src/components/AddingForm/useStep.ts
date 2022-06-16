import { useState } from 'react'

export enum Step {
    InvoiceAddress,
    BankData,
    Contact,
}

export function useStep() {
    const [step, setStep] = useState<Step>(Step.InvoiceAddress)

    const isFirstStep = step === Step.InvoiceAddress
    const isLastStep = step === Step.Contact

    const nextStep = () => {
        if (!isLastStep) {
            setStep((prevStep) => prevStep + 1)
        }
    }

    const prevStep = () => {
        if (!isFirstStep) {
            setStep((prevStep) => prevStep - 1)
        }
    }

    return {
        step,
        isFirstStep,
        isLastStep,
        nextStep,
        prevStep,
    }
}
