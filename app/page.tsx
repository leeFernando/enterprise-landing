import { Metadata } from "next"
import { Button } from "components/Button/Button"

export const metadata: Metadata = {
  title: "Next.js Enterprise Landing",
}

export default function Web() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <div className="mx-auto place-self-center">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            Next.js Enterprise Landing
          </h1>
          <Button href="https://github.com/leeFernando/enterprise-landing" className="mr-3">
            Get started
          </Button>
        </div>
      </div>
    </section>
  )
}
