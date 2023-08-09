'use client'
import { menuIcon } from "@/assets/icons"
import { INavLink } from "@/data/interfaces"
import { default as navLinksData } from '@/data/navLinks.json'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { LinkButton } from "./Buttons"
import { useRef } from "react"


export const MainHeader = () => {
  const currentPage = usePathname()
  const navLinksDesktop = navLinksData.map((link: INavLink) => (
    <li key={link.id}>
      <Link
        href={link.link}
        className={
          `font-bold text-grayish-violet text-base hover:text-very-dark-blue transition-colors ${link.link === currentPage ? 'text-very-dark-blue' : undefined}`
        }
      >{link.content}</Link>
    </li>
  ))

  const navLinksMobile = navLinksData.map((link: INavLink) => (
    <li key={link.id}>
      <LinkButton
        href={link.link}
        textContent={link.content}
        type="no-bg"
        display="block"
        customStyles="py-2 text-white text-x18"
      />
    </li>
  ))

  const mobileNavRef = useRef<HTMLElement>(null)

  return (
    <header className="main-header sticky top-0 left-0 bg-white transition-max-w">
      <div className="container p-6 flex items-center justify-between mx-auto">
        <div className="left flex items-center gap-6">
          <Link href='/'>
            <img src="/brand/logo.svg" width={120} height={32} />
          </Link>
          {/* desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-7">
              {navLinksDesktop}
            </ul>
          </nav>
          {/* --- */}
        </div>
        {/* mobile menu open button */}
        <div className="md:hidden">
          <button
            onClick={() => mobileNavRef.current?.classList.toggle('hidden')}
            aria-controls="mobile-nav"
            aria-haspopup='true'>
            <span className="visually-hidden">open menu</span>
            <img
              src={menuIcon.src}
              alt="menu icon"
              height={menuIcon.height}
              width={menuIcon.width}
            />
          </button>
        </div>
        {/* login sign up buttons desktop */}
        <div className="hidden md:flex gap-2">
          <LinkButton
            href="/"
            textContent="Login"
            type="no-bg"
          />
          <LinkButton
            href="/"
            textContent="Sign Up"
            type="cyan-rounded"
          />
        </div>
      </div>
      {/* mobile nav */}
      <nav id="mobile-nav" className="fixed w-full hidden md:hidden" ref={mobileNavRef}>
        <div className="px-6 py-8 mx-6 bg-dark-violet rounded-xl text-center">
          <ul className="grid gap-3">
            {navLinksMobile}
          </ul>
          <div className="separator my-5 bg-grayish-violet opacity-25" style={{ height: '1px' }}></div>
          <ul className="grid gap-3">
            <li>
              <LinkButton
                href="/"
                textContent="Login"
                type="no-bg"
                display="block"
                customStyles="py-3 text-white text-x18"
              />
            </li>
            <li>
              <LinkButton
                href="/"
                textContent="Sign Up"
                type="cyan-rounded"
                display="block"
                customStyles="py-3 text-x18"
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}