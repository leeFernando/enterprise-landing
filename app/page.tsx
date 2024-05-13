import { Metadata } from "next"
import { CLIENT_LOGOS, FEATURES, SERVICES } from "app/lib/constants"
import { FeatureSection } from "components/FeatureSection/FeatureSection"
import { Image } from "components/Image/Image"
import { LinkButton } from "components/LinkButton/LinkButton"
import { NewsletterForm } from "components/NewsletterForm/NewsletterForm"
import { ServiceCard } from "components/ServiceCard/ServiceCard"

export const metadata: Metadata = {
  title: "Next.js Enterprise Landing",
}

const Home = () => {

  return (
    <>
      <section className="flex flex-col items-center px-16 pt-20 pb-16 w-full text-center bg-slate-50 text-neutral-800 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col px-2.5 pt-2.5 mt-2.5 max-w-full w-[1100px]">
          <h1 className="self-center text-4xl font-extrabold leading-[55px] w-[809px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
            Revolutionize Your Supply Chain <br /> Management
          </h1>
          <p className="mt-5 text-base font-light leading-6 max-md:max-w-full">
            At Orderly, our enterprise software solutions enable you to streamline your supply chain management and increase efficiency. With our <br /> automated quotation, sales order, and purchase order flow, you can save time and focus on what matters most. Our live inventory tracking <br /> and management system ensures that you always have the right products in stock, while our charts and analytics provide you with the insights <br /> necessary to optimize your order performance. Choose Orderly for a smarter, more streamlined supply chain management experience.
          </p>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ec3126c1ac5b5f080a8022e3295eccea653e3fc65f0bc9f08f25ca0f53b6ec4?apiKey=22246eee373843b9ad31feedbfd0d7ad&"
            alt="Supply chain management illustration"
            className="mt-12 w-full aspect-[1.75] max-w-[1080px] max-md:mt-10 max-md:max-w-full"
          />
          <LinkButton className="justify-center self-center mt-12 max-md:mt-10" href=''>
            LEARN MORE
          </LinkButton>
        </div>
      </section>
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
              features={feature.items}
              image={feature.image}
              imagePosition={feature.imagePosition}
            />
          ))}
        </div>
      </section>
      <section className="flex justify-center items-center px-16 py-20 w-full bg-zinc-800 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center px-16 pt-2.5 mb-2 max-w-full w-[1120px] max-md:px-5">
          <div className="flex flex-col items-center max-w-full w-[560px]">
            <h2 className="text-3xl font-medium leading-10 text-center text-white">
              Subscribe to Newsletter
            </h2>
            <p className="mt-6 text-base font-light leading-6 text-center text-white max-md:max-w-full">
              Enter your email address to register to our newsletter subscription!
            </p>
            <NewsletterForm buttonText="Send Message" />
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center px-16 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col px-2.5 pt-14 max-w-full w-[1140px]">
          <h2 className="text-xl font-semibold leading-6 text-center text-neutral-800">Our Clients</h2>
          <div className="justify-center p-2.5 mt-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {CLIENT_LOGOS.slice(0, 4).map(({ src, alt, className }, index) => (
                <div key={index} className={`flex flex-col ${index === 0 ? 'w-[27%]' : index === 1 ? 'ml-5 w-[26%]' : index === 2 ? 'ml-5 w-[30%]' : 'ml-5 w-[17%]'} max-md:ml-0 max-md:w-full`}>
                  <Image src={src} alt={alt} className={`shrink-0 max-w-full ${className}`}/>
                </div>
              ))}
            </div>
          </div>
          <div className="justify-center px-2.5 pt-2.5 pb-12 mt-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {CLIENT_LOGOS.slice(4).map(({ src, alt, className }, index) => (
                <div key={index} className={`flex flex-col ${index === 0 ? 'w-[28%]' : index === 1 ? 'ml-5 w-[26%]' : index === 2 ? 'ml-5 w-[29%]' : 'ml-5 w-[17%]'} max-md:ml-0 max-md:w-full`}>
                  <Image src={src} alt={alt} className={`shrink-0 max-w-full ${className}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home