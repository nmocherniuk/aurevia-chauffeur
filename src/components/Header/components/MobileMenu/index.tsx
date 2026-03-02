import React, { FC } from 'react'
import { cn, scrollToSection } from '@/src/lib/utils'
import { type NavLink } from '@/src/data/routes'
import { NavLinkItem } from '../NavLinkItem'
import SocialIcons from '../../../SocialIcons'

const HEADER_OFFSET = -77

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
    links: NavLink[]
    activeSectionId: string | null
    onSectionChange: (sectionId: string | null) => void
    transitionDuration: string
}

export const MobileMenu: FC<MobileMenuProps> = ({
    isOpen,
    onClose,
    links,
    activeSectionId,
    onSectionChange,
    transitionDuration,
}) => {
    return (
        <div
            className={cn(
                'fixed inset-0 top-[77px] z-40 flex min-h-0 flex-col items-center overflow-y-auto bg-background transition-opacity lg:hidden',
                transitionDuration,
                isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none invisible'
            )}
            aria-hidden={!isOpen}
        >
            <div className='min-h-0 flex-1' aria-hidden />
            <nav className='flex w-full flex-col items-center gap-5 px-6  py-9' aria-label='Mobile menu'>
                {links.map((link) => (
                    <NavLinkItem
                        key={link.href}
                        link={link}
                        variant='mobile'
                        activeSectionId={activeSectionId}
                        onClick={(sectionId) => {
                            onSectionChange(sectionId ?? null)
                            onClose()
                            if (sectionId) {
                                setTimeout(() => scrollToSection(sectionId, HEADER_OFFSET), 100)
                            }
                        }}
                    />
                ))}
            </nav>
            <div className='pb-12'>
                <SocialIcons
                    classNameIcon='border border-primary rounded-full'
                />
            </div>
            <div className='min-h-0 flex-1' aria-hidden />
        </div>
    )
}
