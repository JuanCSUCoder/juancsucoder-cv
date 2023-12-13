import Subtitle from "@/components/basic/Subtitle";
import SubSubTitle from "../components/basic/SubSubTitle";

const stacks = [
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
        logo: "NestJS",
      },
    ],
  },
];

export default function Stacks() {
  return (
    <>
      <Subtitle>Stacks</Subtitle>
      {stacks.map((stack, idx) => (
        <>
          <SubSubTitle>{ stack.name }</SubSubTitle>
          {stack.technologies.map((tech, tidx) => 
            <p key={idx + "-" + tidx + "-tech"}>{tech.name}</p>
          )}
        </>
      ))}
    </>
  );
}
