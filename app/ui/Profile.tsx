import Image from "next/image";
import Title from "../components/basic/Title";
import TitledElement from "@/components/custom/TitledElement";
import Subtitle from "@/components/basic/Subtitle";
import ContactInfo from "./profile-ui/ContactInfo";
import WorkInfo from "./profile-ui/WorkInfo";

import pic from "@/public/images/my-pic.jpg"

export default function Profile() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <Image
          width={200}
          height={200}
          src={pic}
          alt="Profile picture"
          className="rounded-full"

          placeholder="blur"
          priority
        />
        <div className="flex flex-col mt-2 lg:m-4">
          <Title id="profile">Juan Camilo Sánchez Urrego - @JuanCSUCoder</Title>
          <div className="flex flex-col lg:flex-row">
            <ContactInfo />
            <hr className="border-gray-500 mt-1 mb-1 lg:hidden" />
            <div className="lg:ml-10">
              <WorkInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
