import Subtitle from "@/components/basic/Subtitle";
import SubSubTitle from "../components/basic/SubSubTitle";
import TechCard from "./stack-ui/TechCard";

const stacks: {
  name: string,
  technologies: {
    name: string,
    logo: string
  }[]
}[] = [
  {
    name: "Web Stack",
    technologies: [
      {
        name: "NextJS",
        logo: "nextjs.svg",
      },
      {
        name: "React",
        logo: "react.svg",
      },
      {
        name: "Angular",
        logo: "angular.svg",
      },
      {
        name: "ExpressJS",
        logo: "expressjs.svg",
      },
      {
        name: "NestJS",
        logo: "nestjs.svg",
      },
    ],
  },
  {
    name: "Blockchain Stack",
    technologies: [
      {
        name: "Solana Native",
        logo: "sol.svg"
      },
      {
        name: "Anchor Lang",
        logo: "anchor.jpg"
      },
      {
        name: "Ethereum Solidity",
        logo: "solidity.png"
      }
    ]
  }
];

export default function Stacks() {
  return (
    <>
      <Subtitle>Stacks</Subtitle>
      {stacks.map((stack, idx) => (
        <>
          <SubSubTitle className="mt-5">{stack.name}</SubSubTitle>
          <div className="flex flex-row flex-wrap">
            {stack.technologies.map((tech, tidx) => (
              <TechCard key={`${idx}-${tidx}-tech`} tech={tech} />
            ))}
          </div>
        </>
      ))}
    </>
  );
}
