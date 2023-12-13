import Image from "next/image";
import Title from "@/components/basic/Title";
import Subtitle from "@/components/basic/Subtitle";
import Link from "next/link";
import TitledElement from "@/components/custom/TitledElement";
import Profile from "@/app/ui/Profile";
import Stacks from "./ui/Stacks";

export default function Home() {
  return (
    <main className="p-8">
      <Profile />
      <Stacks />
      <Subtitle>Projects & Experience</Subtitle>
      <Subtitle>Education</Subtitle>
    </main>
  );
}
