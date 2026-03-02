import React, { FC } from 'react'
import Link from 'next/link'
import { cn, getSectionIdFromHref, scrollToSection } from '@/src/lib/utils'
import type { NavLink } from '@/src/data/routes'

const HEADER_OFFSET = -107

interface NavLinkItemProps {
    link: NavLink
    variant: 'desktop' | 'mobile'
    activeSectionId?: string | null
    onSectionChange?: (sectionId: string | null) => void
    onClick?: (sectionId?: string | null) => void
}

export const NavLinkItem: FC<NavLinkItemProps> = ({
    link,
    variant,
    activeSectionId = null,
    onSectionChange,
    onClick,
}) => {
    const sectionId = getSectionIdFromHref(link.href)
    const isMobile = variant === 'mobile'
    const isActive = sectionId !== null && sectionId === activeSectionId
    const baseClasses = cn(
        'text-text-secondary transition-colors hover:text-primary relative cursor-pointer',
        isMobile ? 'pb-1 px-2 text-xl text-grey-light' : 'pb-0.5 px-1 text-base',
        isActive && (isMobile ? 'nav-link-active nav-link-active-mobile' : 'nav-link-active-desktop')
    )

    if (sectionId) {
        if (isMobile) {
            return (
                <button
                    type="button"
                    className={baseClasses}
                    onClick={() => onClick?.(sectionId)}
                >
                    {link.name}
                </button>
            )
        }
        return (
            <button
                type="button"
                className={baseClasses}
                onClick={() => {
                    onSectionChange?.(sectionId)
                    scrollToSection(sectionId, HEADER_OFFSET)
                }}
            >
                {link.name}
            </button>
        )
    }

    return (
        <Link href={link.href} className={baseClasses} onClick={() => onClick?.()}>
            {link.name}
        </Link>
    )
}
