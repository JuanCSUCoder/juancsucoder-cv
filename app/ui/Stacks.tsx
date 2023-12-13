import Subtitle from "@/components/basic/Subtitle";
import SubSubTitle from "../components/basic/SubSubTitle";
import TechCard from "./stack-ui/TechCard";

const stacks: {
  name: string;
  technologies: {
    name: string;
    logo: string;
  }[];
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
    name: "Rust Backend Stack",
    technologies: [
      {
        name: "Rust Lang",
        logo: "rust.svg",
      },
      {
        name: "Tokio Runtime",
        logo: "tokio.svg",
      },
      {
        name: "Clap CLI Library",
        logo: "clap.png",
      },
    ],
  },
  {
    name: "Blockchain Stack",
    technologies: [
      {
        name: "Solana Native",
        logo: "sol.svg",
      },
      {
        name: "Anchor Lang",
        logo: "anchor.jpg",
      },
      {
        name: "Rust Lang",
        logo: "rust.svg",
      },
      {
        name: "Ethereum Solidity",
        logo: "solidity.png",
      },
    ],
  },
  {
    name: "Cloud Stack",
    technologies: [
      {
        name: "Docker",
        logo: "docker.svg"
      },
      {
        name: "Docker Compose",
        logo: "compose.png"
      },
      {
        name: "Kubernetes",
        logo: "kubernetes.svg"
      },
      {
        name: "Ubuntu Server",
        logo: "ubuntu.svg"
      },
      {
        name: "Alpine Linux",
        logo: "alpine.png"
      },
      {
        name: "K3s K8s Distro",
        logo: "k3s.png"
      },
      {
        name: "Longhorn Storage",
        logo: "longhorn.png"
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
          <div className="flex flex-row flex-wrap mb-2">
            {stack.technologies.map((tech, tidx) => (
              <TechCard key={`${idx}-${tidx}-tech`} tech={tech} />
            ))}
          </div>
        </>
      ))}
    </>
  );
}
