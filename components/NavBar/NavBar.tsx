import Link from "next/link"
import React from "react"
import { NAV_ITEMS } from "app/lib/constants"
import { routes } from "app/lib/routes"
import { Image } from "components/Image/Image"
import { LinkButton } from "components/LinkButton/LinkButton"

export function NavBar() {
  return (
    <header className="flex flex-col justify-center w-full bg-white max-md:max-w-full">
      <div className="flex gap-5 justify-between px-16 pt-2.5 pb-5 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
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
        <nav className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between self-start px-7 py-3.5 mt-1 text-base font-light leading-5 whitespace-nowrap text-neutral-800 max-md:px-5">
            {NAV_ITEMS.map(({ title, href }, index) => (
              <Link key={index} href={href} className="hover:underline">{title}</Link>
            ))}
          </div>
          <LinkButton href=''>{"LET'S TALK"}</LinkButton>
        </nav>
      </div>
    </header>
  )
}
