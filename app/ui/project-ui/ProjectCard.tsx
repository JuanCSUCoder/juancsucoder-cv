import SubSubTitle from "@/components/basic/SubSubTitle"
import { ProjectType } from "../Projects";
import ExternalLink from "@/app/components/basic/ExternalLink";



export default function ProjectCard({project}: {project: ProjectType}) {
  return (
    <div>
      <SubSubTitle>{project.name}</SubSubTitle>
      {project.link ? <ExternalLink href={project.link}>{ project.link }</ExternalLink> : ""}
    </div>
  );
}