export interface CompanyData {
    id: number
    company: string
    name: string
    additional?: string
    street?: string
    postalCode?: string
    country?: string
    IBAN: string
    BIC: string
    bankName: string
    fax?: string
    email?: string
    birthday?: string
    homepage?: string
}

export type CompanyDataWithoutId = Omit<CompanyData, 'id'>
