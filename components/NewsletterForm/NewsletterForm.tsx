import { Button } from "components/Button/Button"

interface NewsletterFormProps {
  buttonText: string
}

export const NewsletterForm: React.FC<NewsletterFormProps> = ({ buttonText }) => {
  return (
    <form className="flex flex-col justify-center self-stretch px-1.5 pb-2.5 max-md:max-w-full">
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        className="px-4 pt-2 pb-2.5 text-base font-light whitespace-nowrap bg-white rounded-md border border-gray-500 border-solid text-neutral-600 max-md:max-w-full"
        aria-label="Email"
      />
      <Button
        type="submit"
        className="justify-center self-center px-16 py-4 mt-7 text-sm leading-5 text-center text-white bg-blue-600 rounded-md max-md:px-5"
      >
        {buttonText}
      </Button>
    </form>
  )
}