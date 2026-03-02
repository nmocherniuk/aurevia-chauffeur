import React, { FC } from 'react'
import { Divide as Hamburger } from 'hamburger-react'

interface HeaderActionsProps {
    isOpen: boolean
    onToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const HeaderActions: FC<HeaderActionsProps> = ({ isOpen, onToggle }) => {
    return (
        <div className='flex items-center gap-4'>
            <div className='lg:hidden'>
                <Hamburger toggled={isOpen} toggle={onToggle} color='var(--text-secondary)' size={29} />
            </div>
        </div>
    )
}
