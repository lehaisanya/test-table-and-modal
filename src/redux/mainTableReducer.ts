import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CompanyData, CompanyDataWithoutId } from 'types/core'
import { mockCompany } from 'utils/mock'

export interface MainTableState {
    nextId: number
    companies: CompanyData[]
}

const initialState: MainTableState = {
    nextId: 3,
    companies: [
        {
            id: 1,
            ...mockCompany,
        },
        {
            id: 2,
            ...mockCompany,
        },
    ],
}

export const mainTableSlice = createSlice({
    name: 'mainTable',
    initialState,
    reducers: {
        addCompany(state, action: PayloadAction<CompanyDataWithoutId>) {
            state.companies.push({
                id: state.nextId,
                ...action.payload,
            })
            state.nextId++
        },
        addMockCompany(state) {
            state.companies.push({
                id: state.nextId,
                ...mockCompany,
            })
            state.nextId++
        },
        removeCompany(state, action: PayloadAction<number>) {
            state.companies = state.companies.filter(
                (company) => company.id !== action.payload
            )
        },
    },
})

export const mainTableReducer = mainTableSlice.reducer
export const { addCompany, addMockCompany, removeCompany } =
    mainTableSlice.actions
