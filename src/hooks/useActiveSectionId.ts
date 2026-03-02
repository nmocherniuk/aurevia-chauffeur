import { useState, useEffect, useRef } from 'react'
import { getSectionIdFromHref } from '@/src/lib/utils'
import type { NavLink } from '@/src/data/routes'

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: [0, 0.25, 0.5, 0.75, 1],
  rootMargin: '-20% 0px -50% 0px',
}

export function useActiveSectionId(links: NavLink[]): [string | null, (id: string | null) => void] {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null)
  const ratiosRef = useRef<Record<string, number>>({})

  useEffect(() => {
    const sectionIds = links
      .map((l) => getSectionIdFromHref(l.href))
      .filter((id): id is string => id !== null)

    const syncFromHash = () => {
      const hashId =
        typeof window !== 'undefined' ? window.location.hash.slice(1) || null : null
      setActiveSectionId(hashId)
    }

    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) {
      return () => window.removeEventListener('hashchange', syncFromHash)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id) {
            ratiosRef.current[entry.target.id] = entry.intersectionRatio
          }
        })
        const entries_ = Object.entries(ratiosRef.current)
        if (entries_.length === 0) return
        const [maxId] = entries_.reduce((a, b) => (a[1] >= b[1] ? a : b))
        setActiveSectionId(maxId)
      },
      OBSERVER_OPTIONS
    )

    elements.forEach((el) => observer.observe(el))
    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', syncFromHash)
    }
  }, [links])

  return [activeSectionId, setActiveSectionId]
}
