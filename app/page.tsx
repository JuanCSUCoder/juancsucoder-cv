import Image from "next/image";
import Title from "@/components/basic/Title";
import Subtitle from "@/components/basic/Subtitle";
import Link from "next/link";
import TitledElement from "@/components/custom/TitledElement";
import Profile from "@/app/ui/Profile";

export default function Home() {
  return (
    <main className="p-8">
      <Profile />
      <Subtitle>Skills</Subtitle>
      <Subtitle>Projects & Experience</Subtitle>
      <Subtitle>Education</Subtitle>
    </main>
  );
}
