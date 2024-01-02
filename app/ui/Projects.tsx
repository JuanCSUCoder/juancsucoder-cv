import Subtitle from "@/components/basic/Subtitle";
import ProjectCard from "./project-ui/ProjectCard";
import { TechType } from "../components/custom/TechCard";

export type ProjectType = {
  name: string;
  link?: string;
  logo?: string;
  desc?: string;
  technologies?: TechType[];
};

const projects: ProjectType[] = [
  {
    name: "Flatboat Project",
    link: "https://github.com/JuanCSUCoder/FlatBoatProject",
    logo: "flatboat.png",
    desc: "A tool for developing and deploying ROS packages with Docker in Kubernetes.",
    technologies: [
      {
        name: "Rust Lang",
        logo: "rust.svg",
      },
      {
        name: "Clap CLI Library",
        logo: "clap.png",
      },
    ],
  },
  {
    name: "RobotEn",
    link: "https://github.com/JuanCSUCoder/RobotEn",
    logo: "roboten.svg",
    desc: "Devcontainer templates for some ROS (Robotic Operating System) distributions.",
    technologies: [
      {
        name: "Docker",
        logo: "docker.svg",
      },
    ],
  },
  {
    name: "ViRust",
    link: "https://github.com/JuanCSUCoder/ViRust",
    desc: 'ViRust is a "benchmarking" tool or software that allows you to fill the desired amount of memory with random values, to see how your computer performs with limited RAM.',
    technologies: [
      {
        name: "Rust Lang",
        logo: "rust.svg",
      },
      {
        name: "Clap CLI Library",
        logo: "clap.png",
      },
    ],
  },
  {
    name: "CertAsset",
    link: "https://github.com/JuanCSUCoder/CertAsset",
    desc: "A Solana Smart-Contract for certification of real-state or physical assets, into a NFT digital asset, by a selected Certification Authority, developed with the Anchor Framework.",
    technologies: [
      {
        name: "Rust Lang",
        logo: "rust.svg",
      },
      {
        name: "Anchor Lang",
        logo: "anchor.jpg",
      },
    ],
  },
  {
    name: "Caseta",
    link: "https://caseta-web-app.vercel.app/",
    logo: "caseta.webp",
    desc: "A fast, secure and realiable way of making realstate transactions globally. Your real-world assets are represented as digital assets that you own. You are in full control of them. Assets are never transfered if sale-contract conditions are not met.",
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
        name: "NextJS",
        logo: "nextjs.svg",
      },
      {
        name: "React",
        logo: "react.svg",
      },
    ],
  },
  {
    name: "Baxter Interface 2",
    link: "https://github.com/JuanCSUCoder/baxter_interface_2",
    desc: "Baxter Interface for ROS2 is a Software Development Kit (SDK) and Library for developing modern applications on Baxter Robotic Platform",
  },
  {
    name: "Docker GNS3 Appliances",
    link: "https://github.com/JuanCSUCoder/GNS3Appliances",
    desc: "Appliances to build virtual networks in GNS3 using Docker",
    technologies: [
      {
        name: "Docker",
        logo: "docker.svg",
      },
    ],
  },
  {
    name: "SystemicWorks",
    link: "https://juancsucoder.github.io/SystemicWorks/",
    logo: "systemic.svg",
    desc: "This repository contains the webapp of SystemicWorks, which will be an advanced and free tool for thinking in systems, developed from the source code and concept of Nicky Case, and improved to compete with proprietary software.",
  },
  {
    name: "TerMoney",
    link: "https://github.com/JuanCSUCoder/TerMoney",
    desc: "It's a command-line application intended to help recording and managing simple financial records for personal use.",
    technologies: [
      {
        name: "Rust Lang",
        logo: "rust.svg",
      },
    ],
  },
  {
    name: "Hamachi with Haguichi in Docker",
    link: "https://github.com/JuanCSUCoder/HamachiHaguichiDocker",
    desc: "A little workaround to make hamachi work on any linux system properly, with a graphical interface. Using Docker.",
    technologies: [
      {
        name: "Docker",
        logo: "docker.svg",
      },
    ],
  },
];

export default function Projects() {
  return (
    <>
      <Subtitle>Projects & Experience</Subtitle>
      <div className="grid grid-flow-row lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project, pidx) => (
          <ProjectCard key={`${pidx}-proj`} project={project} />
        ))}
      </div>
    </>
  );
}
