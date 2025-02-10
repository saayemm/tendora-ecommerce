

const Title = ({heading, subHeading}) => {
  return (
    <div className="flex flex-col gap-1 justify-start items-start max-w-[400px] mb-8">
        <p className="text-2xl font-semibold uppercase">{heading}</p>
        <p>{subHeading}</p>
    </div>
  )
}

export default Title