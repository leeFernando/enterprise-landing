import { Image } from "components/Image/Image"

interface SocialIconProps {
  src: string
  alt: string
}

export const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => {
  return (
    <div className="flex justify-center items-center px-2.5 rounded bg-zinc-800 h-[34px] w-[34px]">
      <Image src={src} alt={alt} className="aspect-square w-[17px]" />
    </div>
  )
}