import React, { FC } from 'react'
import { type NavLink } from '@/src/data/routes'
import { NavLinkItem } from '../NavLinkItem'

interface DesktopNavProps {
    links: NavLink[]
    activeSectionId: string | null
    onSectionChange: (sectionId: string | null) => void
}

export const DesktopNav: FC<DesktopNavProps> = ({ links, activeSectionId, onSectionChange }) => {
    return (
        <nav
            className='hidden min-w-0 flex-1 justify-end lg:flex lg:items-center lg:gap-x-6 xl:gap-x-8 lg:pt-1 lg:pr-18 xl:pr-27'
            aria-label='Main navigation'
        >
            {links.map((link) => (
                <NavLinkItem
                    key={link.sectionId ?? link.href}
                    link={link}
                    variant='desktop'
                    activeSectionId={activeSectionId}
                    onSectionChange={onSectionChange}
                />
            ))}
        </nav>
    )
}
