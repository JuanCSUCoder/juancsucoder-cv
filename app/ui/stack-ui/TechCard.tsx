import Image from "next/image"

type TechType = {
	name: string,
	logo: string
}

export default function TechCard({ tech }: { tech: TechType }) {
  return (
		<div>
			<Image
				src={`/images/${tech.logo}`}
				alt={`Logo of ${tech.name} technology`}
				width={100}
				height={100}
			/>
			<p>{tech.name}</p>
		</div>
  )
}