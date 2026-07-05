import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import heroimg from "@/assests/hero_img.webp";
import { Earth, FilePlus } from "lucide-react";
import StatUser from "@/Components/Shared/StatUser";
import FeatureUser from "@/Components/Shared/FeatureUser";
import TopFreelancer from "@/Components/Shared/TopFreelancer";
import Ready from "@/Components/Shared/Ready";

export default async function Home() {
  return (
    <div>
      <div className="w-11/12 mx-auto py-10">
        <div className="flex items-center justify-between gap-10">
          <div>
            <p className="text-6xl font-bold mb-5">
              Get your tasks done by<br></br>
              <span className="text-blue-600"> skilled freelancers</span>
            </p>
            <p className="text-lg font-medium text-gray-700 mb-10">
              Connect with expert talent for high-performance projects. From
              software development to creative design, SkillSwap empowers your
              workflow with professional precision.
            </p>
            <div className="flex gap-4">
              <Button
                variant="tertiary"
                size="large"
                className="p-6 border border-gray-300 "
              >
                <Link
                  href="/dashboard/client/post-task"
                  className="flex items-center gap-2"
                >
                  {" "}
                  <FilePlus />
                  Post a Task
                </Link>
              </Button>
              <Button variant="primary" size="large" className="p-6">
                <Link href="/browse-tasks" className="flex items-center gap-2">
                  <Earth />
                  Browse Tasks
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              loading="lazy"
              src={heroimg}
              alt="Hero Image"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
      <StatUser></StatUser>
      <FeatureUser></FeatureUser>
      <TopFreelancer></TopFreelancer>
      <Ready></Ready>
    </div>
  );
}
