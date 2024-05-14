import * as React from "react"
import { LOGOS, SOCIAL_ICONS } from "app/about/lib/constants"
import { Image } from "components/Image/Image"



function AboutPage() {
  return (
    <>
      <section className="px-40 py-24 w-full text-4xl font-semibold leading-10 whitespace-nowrap bg-slate-50 text-neutral-800 max-md:px-5 max-md:max-w-full">
        About
      </section>
      <section className="px-40 max-md:px-5">
        <h2 className="mt-8 text-xl font-semibold leading-6 text-neutral-800 max-md:max-w-full">
          Our vision
        </h2>
        <div className="shrink-0 mt-2.5 h-0.5 border-t-2 border-blue-600 border-solid w-[102px] max-md:ml-2.5" />
        <p className="mt-9 text-base font-light leading-6 text-neutral-800 max-md:max-w-full">
          {`At Orderly, our vision is to transform the supply chain management industry through advanced technology and data-driven insights. We believe in empowering businesses with the tools they need to optimize their supply chain process and achieve their growth potential. Our scalable solutions are designed to meet the unique needs of every business, from startups to enterprises. We're committed to delivering superior customer service and support, with a focus on building long-term partnerships with our clients.`}
        </p>
        <p className="mt-5 text-base font-light leading-6 text-neutral-800 max-md:max-w-full">
          {`Let's talk`}
        </p>
        <p className="mt-5 text-base font-bold leading-6 text-neutral-800 max-md:max-w-full">
          contact@domain.com
        </p>
        <div className="flex gap-1.5 pr-20 mt-5 max-w-full w-[1140px] max-md:flex-wrap max-md:pr-5">
          {SOCIAL_ICONS.map((icon, index) => (
            <div key={index} className="flex justify-center items-center px-2 rounded bg-neutral-800 h-[34px] w-[34px]">
              <Image src={icon.src} alt={icon.alt} className="aspect-square w-[17px]" />
            </div>
          ))}
        </div>
      </section>
      <section className="flex justify-center items-center self-stretch px-16 mt-24 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="justify-center px-2.5 py-8 max-w-full w-[1140px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/906c3ec659c28adb60ec12b5a41b0e458447baaa40f65a6ee87f97e82bc6e9bd?apiKey=22246eee373843b9ad31feedbfd0d7ad&"
                alt="Team story"
                className="w-full aspect-square max-w-[545px] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch py-px my-auto text-neutral-800 max-md:mt-10 max-md:max-w-full">
                <h2 className="text-xl font-semibold leading-6 max-md:max-w-full">
                  Team story
                </h2>
                <div className="shrink-0 mt-2.5 h-0.5 border-t-2 border-blue-600 border-solid w-[105px]" />
                <p className="mt-9 text-base font-light leading-6 max-md:max-w-full">
                  {`At Orderly, we're dedicated to providing world-class supply chain
                  management solutions to businesses. Our team comprises experts in
                  enterprise software, logistics, and data analytics. We're passionate
                  about developing innovative solutions to streamline the supply chain
                  process and empower businesses to achieve their goals. Our team
                  culture is centered around collaboration, innovation, and excellence,
                  with a focus on delivering scalable solutions that grow with your
                  business.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center self-stretch px-16 py-11 w-full bg-neutral-800 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-10 justify-between p-2.5 max-md:flex-wrap">
          {LOGOS.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="shrink-0 w-48 max-w-full aspect-[1.96]"
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutPage