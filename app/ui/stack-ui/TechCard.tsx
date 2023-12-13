import Image from "next/image"

type TechType = {
	name: string,
	logo: string
}

export default function TechCard({ tech }: { tech: TechType }) {
  return (
		<div className="m-1 p-3 border-black border-solid border-2 rounded hover:bg-gray-200 flex flex-col justify-center items-center shadow-lg shadow-black">
			<Image
				src={`/images/${tech.logo}`}
				alt={`Logo of ${tech.name} technology`}
				width={70}
				height={70}
			/>
			<p className="mt-1">{tech.name}</p>
		</div>
  )
}