import React from "react"
import { SOCIAL_ICONS } from "app/lib/constants"
import { SocialIcon } from "components/SocialIcon/SocialIcon"

export function Footer() {
  return (
    <footer className="flex items-center px-44 py-8 bg-gray-100 max-md:px-5">
      <nav className="flex gap-1.5 pr-20 max-md:flex-wrap max-md:pr-5">
        {SOCIAL_ICONS.map((icon, index) => (
          <SocialIcon key={index} src={icon.src} alt={icon.alt} />
        ))}
      </nav>
    </footer>
  )
}
