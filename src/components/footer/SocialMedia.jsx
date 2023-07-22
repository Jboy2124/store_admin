import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <ul className="flex justify-center items-center space-x-1 ">
      <li
        title="Facebook"
        className="cursor-pointer text-[#40128B] hover:text-[#9336B4] hover:scale-110 duration-300"
      >
        <BsFacebook size={20} />
      </li>
      <li
        title="Twitter"
        className="cursor-pointer text-[#40128B] hover:text-[#9336B4] hover:scale-110 duration-300"
      >
        <BsTwitter size={20} />
      </li>
      <li
        title="Instagram"
        className="cursor-pointer text-[#40128B] hover:text-[#9336B4] hover:scale-110 duration-300"
      >
        <BsInstagram size={20} />
      </li>
    </ul>
  );
};

export default SocialMedia;
