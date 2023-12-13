import SubSubTitle from "@/components/basic/SubSubTitle"
import { ProjectType } from "../Projects";
import ExternalLink from "@/app/components/basic/ExternalLink";
import Image from "next/image";



export default function ProjectCard({project}: {project: ProjectType}) {
  return (
    <div>
      <div className="flex flex-row justify-center items-center w-fit">
        {project.logo ? (
          <div className="w-10 h-10 mr-2 relative">
            <Image
              src={`/images/${project.logo}`}
              alt={`Logo ${project.logo} of ${project.name} project.`}
              fill
              style={{objectFit: "contain"}}
            />
          </div>
        ) : ""}
        <SubSubTitle className="mb-0">{project.name}</SubSubTitle>
      </div>
      {project.link ? (
        <ExternalLink href={project.link}>{project.link}</ExternalLink>
      ) : (
        ""
      )}
    </div>
  );
}