import Subtitle from "../components/basic/Subtitle"
import CardContainer from "../components/custom/CardContainer"
import TechCard, { TechType } from "../components/custom/TechCard"


const languages: TechType[] = [
  {
    name: "JavaScript",
    logo: "javascript.svg"
  },
  {
    name: "TypeScript",
    logo: "typescript.svg"
  }
]

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
