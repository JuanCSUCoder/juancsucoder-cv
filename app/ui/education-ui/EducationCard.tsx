import SubSubTitle from "@/components/basic/SubSubTitle";
import { EducationRegistry } from "../Education";
import Tag from "@/app/components/basic/Tag";

export default function EducationCard({ education }: { education: EducationRegistry }) {
  const now = new Date();
  return (
    <div>
      <SubSubTitle>{education.institition}</SubSubTitle>
      <div className="flex flex-row justify-center items-center w-fit">
        <Tag bgColor="stone-900" textColor="white">
          <p>{education.title}</p>
        </Tag>
        <Tag bgColor="slate-500" textColor="white">
          <span>{education.startDate.getFullYear()}</span>
          <span>-</span>
          <span>{education.endDate.getFullYear()}</span>
        </Tag>
        {now < education.endDate ? (
          <Tag bgColor="green-700" textColor="white">
            EN CURSO
          </Tag>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}