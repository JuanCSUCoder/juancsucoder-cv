import Image from "next/image"

export type TechType = {
	name: string,
	logo: string
}

export default function TechCard({ tech }: { tech: TechType }) {
  return (
    <div className="m-1 p-3 border-black border-solid border-2 rounded hover:bg-gray-200 flex flex-col justify-center items-center shadow-lg shadow-black">
      <div className="w-16 h-16 relative">
        <Image
          src={`/images/${tech.logo}`}
          alt={`Logo of ${tech.name} technology`}
					fill
					style={{objectFit: "contain"}}
        />
      </div>
      <p className="mt-1">{tech.name}</p>
    </div>
  );
}