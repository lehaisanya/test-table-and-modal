import { FC, ReactNode } from 'react'
import ReactDOM from 'react-dom'

interface PortalProps {
    children?: ReactNode
}

export const Portal: FC<PortalProps> = ({ children }) => {
    const root = document.getElementById('root') as HTMLElement

    return ReactDOM.createPortal(children, root)
}
