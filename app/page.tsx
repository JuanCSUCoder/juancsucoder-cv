import Image from "next/image";
import Title from "@/components/basic/Title";
import Subtitle from "@/components/basic/Subtitle";
import Link from "next/link";
import TitledElement from "@/components/custom/TitledElement";
import Profile from "@/app/ui/Profile";
import Stacks from "./ui/Stacks";
import Projects from "./ui/Projects";
import Education from "./ui/Education";
import Langs from "./ui/Langs";

export default function Home() {
  return (
    <main className="p-8 sm:p-10 lg:p-14">
      <Profile />
      <Langs />
      <Stacks />
      <Projects />
      <Education />
    </main>
  );
}
