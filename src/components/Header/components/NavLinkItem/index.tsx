"use client"

import React, { FC } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
    cn,
    DRIVER_HEADER_NAV_SCROLL_OFFSET,
    scrollToSection,
} from '@/src/lib/utils'
import { isSamePagePath } from '@/src/i18n/paths'
import type { NavLink } from '@/src/data/routes'

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
    const pathname = usePathname()
    const router = useRouter()
    const { sectionId } = link
    const isSameRouteSection =
        sectionId != null && isSamePagePath(pathname, link.href)

    const isMobile = variant === 'mobile'

    const scrollOffset = isMobile ? -77 : DRIVER_HEADER_NAV_SCROLL_OFFSET

    const scrollToNavSection = () => {
        if (!sectionId) return
        onSectionChange?.(sectionId)
        scrollToSection(sectionId, scrollOffset)
    }

    const handleSectionNav = () => {
        if (!sectionId) return

        if (isSameRouteSection) {
            scrollToNavSection()
            return
        }

        onSectionChange?.(sectionId)
        router.push(link.href, { scroll: false })
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                scrollToSection(sectionId, scrollOffset)
            })
        })
    }

    const isActive = sectionId != null && sectionId === activeSectionId
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
                    onClick={() => {
                        onClick?.(sectionId)
                        setTimeout(() => handleSectionNav(), 100)
                    }}
                >
                    {link.name}
                </button>
            )
        }

        return (
            <button
                type="button"
                className={baseClasses}
                onClick={handleSectionNav}
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
