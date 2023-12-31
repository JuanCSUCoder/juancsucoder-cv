import SubSubTitle from "@/components/basic/SubSubTitle";
import { ProjectType } from "../Projects";
import ExternalLink from "@/app/components/basic/ExternalLink";
import Image from "next/image";
import TechCard from "../../components/custom/TechCard";

export default function ProjectCard({ project }: { project: ProjectType }) {
  const techsNum = project.technologies?.length;
  let hasTechs = false;
  if (techsNum != undefined) {
    hasTechs = techsNum > 0;
  }

  return (
    <div className="mt-2 md:mr-2 mb-2 md:max-w-md overflow-hidden">
      <div className="flex flex-row justify-center items-center w-fit">
        {project.logo ? (
          <div className="w-10 h-10 mr-2 relative rounded overflow-hidden">
            <Image
              src={`/images/${project.logo}`}
              alt={`Logo ${project.logo} of ${project.name} project.`}
              fill
              sizes="2.5rem"
              style={{ objectFit: "contain" }}
            />
          </div>
        ) : (
          ""
        )}
        <SubSubTitle className="mb-0">{project.name}</SubSubTitle>
      </div>
      {project.link ? (
        <ExternalLink href={project.link}>{project.link}</ExternalLink>
      ) : (
        ""
      )}
      {project.desc ? <p>{project.desc}</p> : ""}
      {hasTechs ? <strong>Technologies: </strong> : ""}
      <div className="flex flex-row flex-wrap">
        {project.technologies?.map((tech, tidx) => (
          <TechCard
            key={`${tidx}-tech-proj-${project.name}`}
            small
            tech={tech}
          />
        ))}
      </div>
    </div>
  );
}
