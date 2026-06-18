import { Separator } from "@heroui/react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";

const FooterUser = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-11/12 mx-auto">
        <div className="flex items-end justify-between py-10">
          <div>
            <p className="text-2xl font-bold">SkillSwap</p>
            <p className="w-11/12 text-gray-700 mt-2">
              The premium choice for professional freelancers and high-growth
              companies.
            </p>
          </div>
          <div className=" flex items-center gap-4">
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
          </div>
        </div>
        <Separator className="my-4 bg-gray-300" />
        <div className="py-10 flex items-center justify-between">
          <div>© 2024 SkillSwap Marketplace</div>
          <div className="flex items-center gap-4">
            <FaXTwitter />
            <GrLinkedin />
            <FaFacebookSquare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterUser;
