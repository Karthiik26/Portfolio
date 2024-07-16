import React, { useEffect } from "react";
import "../App.css";
import { FaArrowDownLong } from "react-icons/fa6";
import Aboutus from "./Aboutus";
import Skills from "./Skills";
import Projects from "./Projects";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      {/* <Navbar/> */}
      {/* Home wave */}
      <div className="mt-2"  id="Home" >
        <div className="flex justify-center items-center dark:bg-slate-900 dark:text-white">
          <div className="custom bg-blue-500 bg-gradient-to-b from-white dark:from-12% to-red-400 to-90% dark:bg-gradient-to-b dark:from-slate-900 dark:from-12% dark:to-red-200 dark:to-90%">
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
      </div>

      <div  className="bg-transparent dark:bg-transparent mx-28 mt-[50px]">
        <div
          className="font-extrabold font-sans text-5xl tracking-widest"
          data-aos="fade-up"
          data-aos-duration="2500"
        >
          <div className="text-5xl">Hello</div>
          <div className="ml-40 text-5xl">&</div>
          <div className="ml-[200px] mt-1">WELCOME</div>
        </div>
      </div>

      <div className="mt-[60px] float-right mx-12 w-[430px]">
        <div
          className=" font-extrabold text-center text-5xl font-sans tracking-wider"
          data-aos="fade-up"
          data-aos-duration="2500"
        >
          <div className="">I Am Karthik</div>
        </div>
        <div
          className="font-bold font-sans text-[16px] my-2 text-center tracking-wider leading-7"
          data-aos="fade-up"
          data-aos-duration="2500"
        >
          <div>
            A <b className="text-[19px]">Full Stack Web Developer</b> and 
            <b className="text-[19px]"> Web Designer</b>. Explore my projects,
            designs, and journey in web development. Discover my skills and
            Projects, and let's create something amazing together!
          </div>
        </div>
      </div>

      {/* arrow button */}
      <div className="flex justify-center items-center mt-[300px] rounded-full ">
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
