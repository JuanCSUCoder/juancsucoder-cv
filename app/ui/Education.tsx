import Subtitle from "@/components/basic/Subtitle";
import EducationCard from "./education-ui/EducationCard";

export type EducationRegistry = {
  institition: string;
  title: string;
  startDate?: Date;
  endDate: Date;
}

const education: EducationRegistry[] = [
  {
    institition: "Pontificia Universidad Javeriana",
    title: "Systems Engineer",
    startDate: new Date("2021-01-20"),
    endDate: new Date("2025-11-20"),
  },
  {
    institition: "Liceo de Cervantes Norte",
    title: "Bachelor",
    startDate: new Date("2008-01-20"),
    endDate: new Date("2020-11-20"),
  },
];

export default function Education() {
  return (
    <>
      <Subtitle className="mt-2">Education</Subtitle>
      {education.map((edu, eidx) => 
        <EducationCard key={`${eidx}-edu`} education={edu} />
      )}
    </>
  );
}