export const ContactForm: React.FC = () => (
  <form className="flex flex-col grow justify-center self-stretch pb-4 mt-24 text-base font-semibold leading-6 text-neutral-800 max-md:mt-10 max-md:max-w-full">
    <div className="flex flex-col justify-center whitespace-nowrap max-md:max-w-full">
      <label htmlFor="name" className="max-md:max-w-full">
        Name
      </label>
      <input
        type="text"
        id="name"
        className="shrink-0 mt-1.5 h-14 rounded-md border border-solid bg-white bg-opacity-50 border-neutral-600 max-md:max-w-full"
        aria-label="Name"
      />
    </div>
    <div className="flex flex-col justify-center mt-4 whitespace-nowrap max-md:max-w-full">
      <label htmlFor="email" className="max-md:max-w-full">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="shrink-0 mt-1.5 h-14 rounded-md border border-solid bg-white bg-opacity-50 border-neutral-600 max-md:max-w-full"
        aria-label="Email"
      />
    </div>
    <div className="flex flex-col justify-center mt-4 whitespace-nowrap max-md:max-w-full">
      <label htmlFor="subject" className="max-md:max-w-full">
        Subject
      </label>
      <input
        type="text"
        id="subject"
        className="shrink-0 mt-1.5 h-14 rounded-md border border-solid bg-white bg-opacity-50 border-neutral-600 max-md:max-w-full"
        aria-label="Subject"
      />
    </div>
    <div className="flex flex-col justify-center mt-4 whitespace-nowrap max-md:max-w-full">
      <label htmlFor="message" className="max-md:max-w-full">
        Message
      </label>
      <textarea
        id="message"
        className="shrink-0 mt-1.5 rounded-md border border-solid bg-white bg-opacity-50 border-neutral-600 h-[188px] max-md:max-w-full"
        aria-label="Message"
      />
    </div>
    <button
      type="submit"
      className="justify-center items-center px-16 py-2.5 mt-4 text-sm text-center text-white bg-blue-600 rounded-md max-md:px-5 max-md:max-w-full"
    >
      Send Message
    </button>
  </form>
)