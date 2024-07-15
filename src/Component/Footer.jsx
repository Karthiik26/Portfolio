import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full max-w-full h-40 py-5 border-t-2 dark:border-t-white border-t-black border-b-white">
        <div className="text-xl font-bold text-center mt-4" >Let's Connect DIGITALLY........</div>
      <div className="flex justify-between items-center mx-2 mt-4">
        <div className="flex gap-2 ml-10">
          <div className=" font-serif font-extrabold text-md" > &copy; 2024 </div>
          <div className=" font-serif font-medium text-md" >Created By Karthik Nagula</div>{" "}
        </div>
        <div className="flex justify-center items-center gap-4 mr-10">
          <a
            className="hover:bg-gray-600 dark:hover:bg-white dark:hover:text-black hover:text-white hover:rounded-full p-3"
            href="https://www.linkedin.com/in/karthik-nagula-b6a463283" target="blank"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            className="hover:bg-gray-600 dark:hover:bg-white dark:hover:text-black hover:text-white hover:rounded-full p-3"
            href="https://github.com/Karthiik26" target="blank"
          >
            <FaSquareGithub size={22} />
          </a>
          <a
            className="hover:bg-gray-600 dark:hover:bg-white dark:hover:text-black hover:text-white hover:rounded-full p-3"
            href="mailto:imkarthiik26@gmail.com" target="blank"
          >
            <SiGmail size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
