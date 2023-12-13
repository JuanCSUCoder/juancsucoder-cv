import Subtitle from "@/components/basic/Subtitle";
import ProjectCard from "./project-ui/ProjectCard";

const projects = [
  {
    name: "Flatboat CLI"
  },
  {
    name: "Flatboat Images"
  },
  {
    name: "Flatboat Templates"
  },
  {
    name: "RobotEn"
  },
  {
    name: "ViRust"
  },
  {
    name: "CertAsset"
  },
  {
    name: "Caseta"
  },
  {
    name: "Baxter Interface 2"
  },
  {
    name: "Docker GNS3 Appliances"
  },
  {
    name: "SystemicWorks"
  },
  {
    name: "TerMoney"
  },
  {
    name: "Hamachi with Haguichi in Docker"
  }
]

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