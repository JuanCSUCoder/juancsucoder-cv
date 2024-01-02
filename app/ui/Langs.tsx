import Subtitle from "../components/basic/Subtitle"
import CardContainer from "../components/custom/CardContainer"
import TechCard, { TechType } from "../components/custom/TechCard"


const languages: TechType[] = [
  {
    name: "JavaScript",
    logo: "javascript.svg",
  },
  {
    name: "TypeScript",
    logo: "typescript.svg",
  },
  {
    name: "Rust Lang",
    logo: "rust.svg",
  },
  {
    name: "Python",
    logo: "python.svg",
  },
  {
    name: "Java",
    logo: "java.svg",
  },
  {
    name: "Kotlin",
    logo: "kotlin.svg",
  },
  {
    name: "C++",
    logo: "c++.svg",
  },
  {
    name: "HTML 5",
    logo: "html5.svg",
  },
  {
    name: "CSS",
    logo: "css.svg",
  },
];

export default function Langs() {
  return (
    <>
      <Subtitle>Languages</Subtitle>
      <CardContainer>
        {languages.map((lang, idx) => (
          <TechCard key={`lang-tech-${idx}`} tech={lang} />
        ))}
      </CardContainer>
    </>
  );
}
