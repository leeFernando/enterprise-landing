import { Image } from "components/Image/Image"
import { LinkButton } from "components/LinkButton/LinkButton"

interface FeatureSectionProps {
  title: string
  description: string
  features: { icon: string; text: string }[]
  image: string
  imagePosition: "left" | "right" | string
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  features,
  image,
  imagePosition,
}) => (
  <div className="justify-center p-2.5 max-md:max-w-full">
    <div className={`flex gap-5 max-md:flex-col max-md:gap-0 justify-between ${
      imagePosition === "right" ? "" : "flex-row-reverse"
    }`}>
      <div className="flex flex-col w-4/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col justify-center self-stretch py-20 text-base font-light leading-6 text-neutral-800 max-md:mt-5 max-md:max-w-full">
          <h2 className="text-4xl font-semibold leading-10 max-md:max-w-full">{title}</h2>
          <p className="mt-5 max-md:max-w-full">{description}</p>
          {features.map((feature, index) => (
            <div key={index} className="flex gap-2.5 py-px max-md:flex-wrap">
              <Image src={feature.icon} className="shrink-0 my-auto w-3.5 aspect-square" alt="" />
              <div className="max-md:max-w-full">{feature.text}</div>
            </div>
          ))}
          <LinkButton href='' className="self-start mt-7">
            READ MORE
          </LinkButton>
        </div>
      </div>
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <Image src={image} className="w-full aspect-square max-w-[545px] max-md:mt-5 max-md:max-w-full" alt="" />
      </div>
    </div>
  </div>
)