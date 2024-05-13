interface ServiceCardProps {
  title: string
  description: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow self-stretch p-6 w-full bg-gray-100 rounded-xl text-neutral-800 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <h3 className="text-xl font-semibold leading-6 max-md:max-w-full">{title}</h3>
        <p className="mt-3 text-base font-light leading-6 max-md:max-w-full">{description}</p>
      </div>
    </div>
  )
}