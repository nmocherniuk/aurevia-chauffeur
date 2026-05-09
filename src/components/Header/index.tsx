"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MainContainer from '../MainContainer'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import { getNavLinksForPath } from '@/src/data/routes'
import { cn } from '@/src/lib/utils'
import { DesktopNav } from './components/DesktopNav'
import { HeaderActions } from './components/HeaderActions'
import { MobileMenu } from './components/MobileMenu'
import { useActiveSectionId } from '../../hooks/useActiveSectionId'

const MAIN_SECTION_ID = 'accueil'

const Header: React.FC = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const navLinks = getNavLinksForPath(pathname)
    const [activeSectionId, setActiveSectionId] = useActiveSectionId(navLinks)

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === '/') {
            e.preventDefault()
            document.getElementById(MAIN_SECTION_ID)?.scrollIntoView({ behavior: 'smooth' })
        }
    }

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    const transitionDuration = 'duration-300'

    return (
        <>
            <header className='flex h-[77px] fixed top-0 left-0 right-0 z-50 backdrop-blur-[20px] bg-[#BFBFBF]/8'>
                <div
                    className={cn(
                        'absolute inset-0 bg-background transition-opacity',
                        transitionDuration,
                        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    )}
                    aria-hidden={!isOpen}
                />
                <MainContainer className='relative z-10 flex h-full min-h-0 flex-1 items-center justify-between gap-6'>
                    <Link
                        href="/#accueil"
                        className='relative h-full aspect-square shrink-0'
                        onClick={handleLogoClick}
                    >
                        <Image
                            src={logo}
                            alt="Aurevia Chauffeur"
                            fill
                            className='object-contain object-left'
                            priority
                        />
                    </Link>
                    <DesktopNav links={navLinks} activeSectionId={activeSectionId} onSectionChange={setActiveSectionId} />
                    <HeaderActions isOpen={isOpen} onToggle={setIsOpen} />
                </MainContainer>
            </header>

            <MobileMenu
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                links={navLinks}
                activeSectionId={activeSectionId}
                onSectionChange={setActiveSectionId}
                transitionDuration={transitionDuration}
            />
        </>
    )
}

export default Header
