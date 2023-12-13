import SubSubTitle from "@/components/basic/SubSubTitle"

type ProjectType = {
  name: string
}

export default function ProjectCard({project}: {project: ProjectType}) {
  return (
    <SubSubTitle>{ project.name }</SubSubTitle>
  )
}