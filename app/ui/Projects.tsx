import Subtitle from "@/components/basic/Subtitle";
import ProjectCard from "./project-ui/ProjectCard";
import { TechType } from "./stack-ui/TechCard";

export type ProjectType = {
  name: string;
  link?: string;
  logo?: string;
  technologies?: TechType[];
};

const projects: ProjectType[] = [
  {
    name: "Flatboat Project",
    link: "https://github.com/JuanCSUCoder/FlatBoatProject",
    logo: "flatboat.png"
  },
  {
    name: "RobotEn",
    link: "https://github.com/JuanCSUCoder/RobotEn",
  },
  {
    name: "ViRust",
  },
  {
    name: "CertAsset",
  },
  {
    name: "Caseta",
  },
  {
    name: "Baxter Interface 2",
  },
  {
    name: "Docker GNS3 Appliances",
  },
  {
    name: "SystemicWorks",
  },
  {
    name: "TerMoney",
  },
  {
    name: "Hamachi with Haguichi in Docker",
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