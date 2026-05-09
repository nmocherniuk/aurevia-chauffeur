"use client"

import React, { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn, getSectionIdFromHref, scrollToSection } from '@/src/lib/utils'
import type { NavLink } from '@/src/data/routes'

const HEADER_OFFSET = -107

function basePathBeforeHash(href: string): string {
    const base = href.split('#')[0]
    return base === '' ? '/' : base
}

function normalizePath(p: string): string {
    const t = p.replace(/\/$/, '')
    return t === '' ? '/' : t
}

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
    const sectionId = getSectionIdFromHref(link.href)
    const basePath = normalizePath(basePathBeforeHash(link.href))
    const currentPath = normalizePath(pathname)
    const isSameRouteSection =
        sectionId !== null && basePath === currentPath

    const isMobile = variant === 'mobile'
    const isActive = sectionId !== null && sectionId === activeSectionId
    const baseClasses = cn(
        'text-text-secondary transition-colors hover:text-primary relative cursor-pointer',
        isMobile ? 'pb-1 px-2 text-xl text-grey-light' : 'pb-0.5 px-1 text-base',
        isActive && (isMobile ? 'nav-link-active nav-link-active-mobile' : 'nav-link-active-desktop')
    )

    if (sectionId && isSameRouteSection) {
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
