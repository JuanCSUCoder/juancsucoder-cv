import SubSubTitle from "@/components/basic/SubSubTitle";
import { EducationRegistry } from "../Education";
import Tag from "@/app/components/basic/Tag";

export default function EducationCard({ education }: { education: EducationRegistry }) {
  const now = new Date();
  return (
    <div>
      <SubSubTitle>{education.institition}</SubSubTitle>
      <div className="flex flex-row justify-center items-center w-fit">
        <Tag className="bg-stone-900 text-white">
          <p>{education.title}</p>
        </Tag>
        <Tag className="bg-slate-500 text-white">
          {education.startDate ? <>
            <span>{education.startDate.getFullYear()}</span>
            <span>-</span>
          </> : ""}
          <span>{education.endDate.getFullYear()}</span>
        </Tag>
        {now < education.endDate ? (
          <Tag className="bg-green-700 text-white">
            EN CURSO
          </Tag>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}