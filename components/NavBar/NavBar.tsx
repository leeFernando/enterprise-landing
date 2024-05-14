'use client'

import Link from "next/link"
import { useState } from "react"
import { NAV_ITEMS } from "app/lib/constants"
import { routes } from "app/lib/routes"
import { Image } from "components/Image/Image"
import { LinkButton } from "components/LinkButton/LinkButton"

export function NavBar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const handleToggleMobileNav = () => setIsMobileNavOpen((prev) => !prev)

  return (
    <header className="flex flex-col justify-center w-full bg-white max-md:max-w-full">
      <div className="flex gap-0 justify-between px-16 pt-2.5 pb-5 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <Link href={routes.HOME}>
          <div className="flex gap-4 self-start mt-2 text-lg font-medium leading-5 whitespace-nowrap text-neutral-800 max-md:flex-wrap">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a908ffc301ae460cd07c9ab89a46e695a73933ddf6a9e51da18b839d1eaa6e94?apiKey=22246eee373843b9ad31feedbfd0d7ad&"
                alt="Orderly logo"
                className="shrink-0 aspect-[0.98] w-[43px]"
              />
            <div className="my-auto max-md:max-w-full">Orderly</div>
          </div>
        </Link>
        <nav className="flex gap-5 justify-between max-md:hidden">
          <div className="flex flex-wrap gap-5 justify-between self-start px-7 py-3.5 mt-1 text-base font-light leading-5 whitespace-nowrap text-neutral-800 max-md:px-5">
            {NAV_ITEMS.map(({ title, href }, index) => (
              <Link key={index} href={href} className="hover:underline">{title}</Link>
            ))}
          </div>
          <LinkButton href={routes.CONTACT}>{"LET'S TALK"}</LinkButton>
        </nav>
        <nav className="md:hidden flex items-center">
          <button
            type="button"
            className="relative inline-flex items-center justify-center rounded-md p-2 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={handleToggleMobileNav}
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </nav>
      </div>
      <div className={`absolute top-20 md:hidden`}>
        <div className={`flex flex-col justify-center space-y-3 px-5 bg-white w-screen transition-all ease-linear delay-100 overflow-hidden ${isMobileNavOpen ? 'h-32' : 'h-0'}`}>
          {NAV_ITEMS.map(({ title, href }, index) => (
            <Link key={index} href={href} className={`hover:underline transition-all ease-linear delay-75 ${isMobileNavOpen ? ' opacity-100' : 'opacity-0'}`}>{title}</Link>
          ))}
        </div>
      </div>
    </header>
  )
}
