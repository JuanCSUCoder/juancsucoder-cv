import Subtitle from "@/components/basic/Subtitle";
import ProjectCard from "./project-ui/ProjectCard";
import { TechType } from "./stack-ui/TechCard";

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
  },
  {
    name: "RobotEn",
    link: "https://github.com/JuanCSUCoder/RobotEn",
    logo: "roboten.svg",
    desc: "Devcontainer templates for some ROS (Robotic Operating System) distributions.",
  },
  {
    name: "ViRust",
    link: "https://github.com/JuanCSUCoder/ViRust",
  },
  {
    name: "CertAsset",
    link: "https://github.com/JuanCSUCoder/CertAsset",
  },
  {
    name: "Caseta",
    link: "https://caseta-web-app.vercel.app/",
    logo: "caseta.webp",
  },
  {
    name: "Baxter Interface 2",
    link: "https://github.com/JuanCSUCoder/baxter_interface_2",
  },
  {
    name: "Docker GNS3 Appliances",
    link: "https://github.com/JuanCSUCoder/GNS3Appliances",
  },
  {
    name: "SystemicWorks",
    link: "https://juancsucoder.github.io/SystemicWorks/",
    logo: "systemic.svg",
  },
  {
    name: "TerMoney",
    link: "https://github.com/JuanCSUCoder/TerMoney",
  },
  {
    name: "Hamachi with Haguichi in Docker",
    link: "https://github.com/JuanCSUCoder/HamachiHaguichiDocker",
  },
];

export default function Projects() {
  return (
    <>
      <Subtitle>Projects & Experience</Subtitle>
      {projects.map((project, pidx) => 
        <ProjectCard key={`${pidx}-proj`} project={project} />
      )}
    </>
  )
}