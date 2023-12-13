import Image from "next/image"

export type TechType = {
	name: string,
	logo: string
}

export default function TechCard({ tech, small }: { tech: TechType, small?: boolean }) {
  return (
    <div className="m-1 p-3 w-fit border-black border-solid border-2 rounded hover:bg-gray-200 flex flex-col justify-center items-center shadow-lg shadow-black">
      <div className={(small ? "w-7 h-7" : "w-16 h-16") + " " + "relative"}>
        <Image
          src={`/images/${tech.logo}`}
          alt={`Logo of ${tech.name} technology`}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <p className={"mt-1" + (small ? " text-sm" : "")}>{tech.name}</p>
    </div>
  );
}