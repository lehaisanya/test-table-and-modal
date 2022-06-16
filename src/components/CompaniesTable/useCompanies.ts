import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'

export function useCompanies() {
    return useSelector((state: RootState) => state.mainTable.companies)
}
