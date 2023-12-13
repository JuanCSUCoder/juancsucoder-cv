import Image from "next/image";
import Title from "@/components/basic/Title";
import Subtitle from "@/components/basic/Subtitle";
import Link from "next/link";
import TitledElement from "@/components/custom/TitledElement";
import Profile from "@/app/ui/Profile";
import Stacks from "./ui/Stacks";
import Projects from "./ui/Projects";

export default function Home() {
  return (
    <main className="p-8">
      <Profile />
      <Stacks />
      <Projects />
      <Subtitle>Education</Subtitle>
    </main>
  );
}
