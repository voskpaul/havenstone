'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Properties' },
  { href: '/about', label: 'Our approach' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && menuOpen) {
          setMenuOpen(false)
          menuButtonRef.current?.focus()
        }
      }}
    >
      <div className="site-header__inner container">
        <Link className="brand" href="/" aria-label="Havenstone Properties home" onClick={() => setMenuOpen(false)}>
          <span className="brand__mark" aria-hidden="true">H</span>
          <span className="brand__wordmark">
            <span className="brand__name">Havenstone</span>
            <span className="brand__descriptor">Properties</span>
          </span>
        </Link>

        <nav className="header-nav" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
            return (
              <Link key={item.href} href={item.href} aria-current={active ? 'page' : undefined}>
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="site-header__actions">
          <Link className="button button--forest header-viewing" href="/contact">
            Make an enquiry <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <button
            ref={menuButtonRef}
            className="mobile-menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen}>
        {navItems.map((item) => {
          const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          )
        })}
        <Link className="button button--forest" href="/contact" onClick={() => setMenuOpen(false)}>
          Make an enquiry <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </nav>
    </header>
  )
}
