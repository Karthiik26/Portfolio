import React from "react";
import "../App.css";
import { FaArrowDownLong } from "react-icons/fa6";
import Aboutus from "./Aboutus";
import Skills from "./Skills";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      {/* Home wave */}
      <div
        className="flex justify-center items-center dark:bg-slate-900 dark:text-white"
        id="Home"
      >
        <div
          className="custom bg-blue-500 bg-gradient-to-b from-white dark:from-12% to-red-400 to-90% dark:bg-gradient-to-b dark:from-slate-900 dark:from-12% dark:to-red-200 dark:to-90%"
          id="Home"
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className=" fill-white dark:fill-slate-900"
            ></path>
          </svg>
        </div>
      </div>

      <div className="bg-transparent dark:bg-transparent mx-28 mt-10">
        <div className="font-bold font-serif text-5xl tracking-widest">
        <div className="text-5xl" >Hello</div>
        <div className="ml-40 text-5xl" >&</div>
        <div className="ml-48" >WELCOME</div>
        </div>
      </div>
      <div className="mt-0 float-right mx-20 w-[430px]">
        <div className=" font-extrabold text-center text-5xl font-sans tracking-wide">
          I Am KARTHIIK
        </div>
        <div className="font-bold font-sans text-[16px] my-4 text-center tracking-tight leading-7">
        A <b className="text-[19px]" >Full Stack Web Developer</b> and <b className="text-[19px]" >Web
        Designer</b>. Explore my projects, designs, and journey in web development.
        Discover my skills and Projects, and let's create something amazing
        together!
        </div>
        </div>
        <div>
      </div>

      {/* arrow button */}
      <div className="flex justify-center items-center mt-[275px] rounded-full ">
        <a
          href="#about"
          className="bg-black text-white dark:bg-white dark:text-black border-2 p-5 rounded-full my-6 animate-bounce-slow shadow-2xl hover:border-4 hover:border-red-200"
        >
          <FaArrowDownLong size={28} />
        </a>
      </div>

      {/* About Us */}
      <Aboutus />

      {/* Skills And Education */}
      <Skills />

      {/* Projects */}
      <Projects />
    </>
  );
};

export default Home;
