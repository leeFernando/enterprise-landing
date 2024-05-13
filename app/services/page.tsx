import { Metadata } from "next"
import { SERVICES } from "app/lib/constants"
import { FEATURES } from "app/services/lib/constants"
import { FeatureSection } from "components/FeatureSection/FeatureSection"
import { ServiceCard } from "components/ServiceCard/ServiceCard"

export const metadata: Metadata = {
  title: "Next.js Enterprise Landing",
}

const ServicesPage = () => {

  return (
    <>
      <section className="flex justify-center items-center p-16 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col p-2.5 max-w-full w-[1140px]">
          <h2 className="text-4xl font-semibold leading-10 text-neutral-800 max-md:max-w-full">
            Services we provide
          </h2>
          <div className="justify-center pt-10 mt-5 max-md:pr-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {SERVICES.slice(0, 2).map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
          <div className="justify-center pt-2.5 mt-5 max-md:pr-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {SERVICES.slice(2).map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center px-16 py-20 w-full bg-slate-50 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col p-2.5 mb-5 max-w-full w-[1140px] gap-32">
          {FEATURES.map((feature, index) => (
            <FeatureSection
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              imagePosition={feature.imagePosition}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default ServicesPage