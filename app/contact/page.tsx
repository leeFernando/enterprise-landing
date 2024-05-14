import * as React from "react"
import { SOCIAL_ICONS } from "app/contact/lib/constants"
import { ContactForm } from "components/ContactForm/ContactForm"
import { Image } from "components/Image/Image"

const ContactPage = () => {
  return (
    <div className="flex flex-col h-full bg-neutral-50">
      <section className="flex flex-col items-center px-16 pt-5 pb-32 w-full max-md:px-5 max-md:max-w-full">
        <div className="justify-center px-2.5 pt-2.5 max-w-full w-[1120px] max-md:pr-5">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow self-stretch py-20 w-full max-md:mt-10 max-md:max-w-full">
                <h1 className="mt-5 text-4xl font-semibold leading-10 text-neutral-800 max-md:max-w-full">
                  Get in touch with us
                </h1>
                <p className="mt-5 text-base font-light leading-6 text-neutral-600 max-md:max-w-full">
                  We appreciate your interest in our supply chain management
                  <br /> systems. If you have any questions, concerns, or
                  comments, <br /> please feel free to contact us through the
                  information <br /> provided below. Our team is always available
                  to help you with <br /> anything you need. Thank you for
                  considering Orderly and we <br /> look forward to hearing from
                  you.
                </p>
                <div className="flex gap-1.5 pr-20 mt-5 max-md:flex-wrap max-md:pr-5">
                  {SOCIAL_ICONS.map((icon, index) => (
                    <div key={index} className="flex justify-center items-center px-2.5 w-10 h-10 rounded bg-neutral-800">
                      <Image src={icon.src} alt={icon.alt} className="w-5 aspect-square" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center w-full max-md:max-w-full flex-1 bg-neutral-50 pb-[80px]">
        <div className="flex flex-col justify-center w-full max-md:max-w-full">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/412cb0ccd643d33aaf03e03b51f9a282c32ec6f573401cac31db2d6b25d47b22?apiKey=22246eee373843b9ad31feedbfd0d7ad&"
            alt="Decorative background image"
            className="w-full aspect-[4.17] max-md:max-w-full"
          />
        </div>
      </section>
    </div>
  )
}

export default ContactPage