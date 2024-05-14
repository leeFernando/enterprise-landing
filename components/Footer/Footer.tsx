import React from "react"
import { SOCIAL_ICONS } from "app/lib/constants"
import { SocialIcon } from "components/SocialIcon/SocialIcon"

export function Footer() {
  return (
    <footer className="flex items-center px-44 py-8 bg-gray-100 max-lg:px-5 max-lg:justify-center">
      <nav className="flex gap-1.5 max-md:flex-wrap">
        {SOCIAL_ICONS.map((icon, index) => (
          <SocialIcon key={index} src={icon.src} alt={icon.alt} />
        ))}
      </nav>
    </footer>
  )
}
