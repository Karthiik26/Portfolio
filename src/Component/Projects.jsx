import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <div id="projects" className="mt-0 p-20 bg-gray-50  dark:bg-slate-900 dark:text-white">
        <div className="bg-slate-200 h-20 rounded-2xl  dark:bg-slate-600 dark:text-white">
          <div className="text-2xl pt-4 font-sans font-bold w-56 border-b-4  dark:border-b-white border-b-black mb-20 ml-20">
            Projects
          </div>
        </div>

        <div className="flex justify-center items-center gap-28 flex-row mt-14">
          <div className="w-auto my-4 py-6 px-4 shadow-xl shadow-gray-400 rounded-lg h-[500px]">
            <a
              href="https://karthikcrudmern.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../src/assets/image2.png"
                alt="Img Not Found"
                width={600}
                className="border-2 border-gray-800 rounded-lg"
              />
            </a>
            <div className="flex justify-center items-center flex-col mx-2 mt-2 gap-2">
              <div className=" font-sans font-bold my-4">
              <div className="text-lg">TODO PROJECT </div>
                <div className="text-center font-semibold text-md" > ( MERN STACK )</div>
              </div>
              <div className="text-sm font-sans font-semibold text-gray-500">
                User Can Create Update And Delete TODOs As Well As Can
                Update Their Profile
              </div>
            </div>
            <div className="ml-12 flex gap-6 mt-3">
              <a
                className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                href="https://github.com/Karthiik26/CRUD-Frontend-MERN"
                target="blank"
                title="CRUD FRONTEND"
              >
                <FaGithub size={18} />
              </a>
              <a
                className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                href="https://github.com/Karthiik26/CRUD-Backend-MERN"
                target="blank"
                title="CRUD BACKEND"
              >
                <FaGithub size={18} />
              </a>
              <a
                className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                href="https://karthikcrudmern.vercel.app/"
                target="blank"
              >
                <FaLink size={18} />
              </a>
              {/* <a href="https://tailorbusinesswebapp.vercel.app/Login" target='blank'><FaLink size={18} /></a> */}
            </div>
          </div>

          <div className="w-auto my-4 py-6 px-4 shadow-xl shadow-gray-400 rounded-lg h-[500px]">
            <a
              href="https://schedule-lec-front-end.vercel.app/Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../src/assets/image.png"
                alt="Img Not Found"
                width={630}
                className="border-2 border-gray-800 rounded-lg"
              />
            </a>
            <div className="flex justify-center items-center flex-col mx-2 mt-2 gap-2">
              <div className="text-lg font-sans font-bold text-center my-4">
              <div className="text-lg">LECTURE SCHEDULER PROJECT</div>
              <div className="text-center font-semibold text-md" > ( MERN STACK )</div>
              </div>
              <div className="text-sm font-sans font-semibold text-gray-500">
                <b>Admin - </b> Should Be Able To Handle The Lectures And
                Instructors
              </div>
            </div>
            <div className="ml-12 flex gap-6 mt-3">
              <a
                className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                href="https://github.com/Karthiik26/ScheduleLec_FrontEnd"
                target="blank"
                title="Lecture Schedule FrontEnd"
              >
                <FaGithub size={18} />
              </a>
              <a
                className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                href="https://github.com/Karthiik26/ScheduleLec_BackEnd"
                target="blank"
                title="Lecture Schedule BackEnd"
              >
                <FaGithub size={18} />
              </a>
              <a
                className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                href="https://schedule-lec-front-end.vercel.app/Email"
                target="blank"
                title="Website Link"
              >
                <FaLink size={18} />
              </a>
              {/* <a href="https://tailorbusinesswebapp.vercel.app/Login" target='blank'><FaLink size={18} /></a> */}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-28 flex-row mt-20">

          <div className="w-auto my-4 py-6 px-4 shadow-xl shadow-gray-400 rounded-lg h-[500px]">
          <a
              href="https://tailorbusinesswebapp.vercel.app/Login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../src/assets/tailor1.png"
                alt="Img Not Found"
                width={600}
                className="border-2 border-gray-800 rounded-lg"
              />
            </a>
            <div className="flex justify-center items-center flex-col mx-2 mt-2 gap-2">
              <div className="font-sans font-bold text-center my-4">
              <div className="text-lg">TAILOR BUSINESS WEB APPLICATION PROJECT</div>
              <div className="text-center font-semibold text-md" > ( MEAN STACK )</div>
              </div>
              <div className="text-sm font-sans font-semibold text-gray-500">
              User Purchase Cloths And Make Appointment With Tailors.
              </div>
            </div>
            <div className="ml-12 flex gap-6 mt-3">
            <a
                className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                href="https://github.com/Karthiik26/Tailor_Frontend"
                target="blank"
                title="Tailor FrontEnd"
              >
                <FaGithub size={18} />
              </a>
              <a
                className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                href="https://github.com/Karthiik26/Tailor_Backend"
                title="Tailor Backend"
                target="blank"
              >
                <FaGithub size={18} />
              </a>
              <a
                className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                href="https://tailorbusinesswebapp.vercel.app/Login"
                target="blank"
              >
                <FaLink size={18} />
              </a>
            </div>
          </div>

          <div className="w-auto my-4 py-6 px-4 shadow-xl shadow-gray-400 rounded-lg h-[500px]">
            <img
              src="../src/assets/image3.png"
              alt="Img Not Found"
              width={600}
              className="border-2 border-gray-800 rounded-lg"
            />
            <div className="flex justify-center items-center flex-col mx-2 mt-2 gap-2">
              <div className="font-sans font-bold text-center my-4">
              <div className="text-lg">E-COMMERCE PROJECT </div>
              <div className="text-center font-semibold text-md" > (  Angular js + REST API  )</div>
              </div>
              <div className="text-sm font-sans font-semibold text-gray-500">
                User Can Purchase And Seller Can Add Product
              </div>
            </div>
            <div className="ml-12 flex gap-6 mt-3">
              {/* <a
                className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                href=""
                target="blank"
                title="Not Available"
              >
              </a> */}
                <FaGithub size={18} />
              {/* <a
                className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                href=""
                target="blank"
                title="Not Available"
              >
              </a> */}
                <FaLink size={18} />
            </div>
          </div>
        </div>
      </div>

      <div id="ThankYou" className="" >
          <div className="dark:bg-slate-900 dark:text-white flex justify-center items-center text-2xl font-sans font-bold m-auto py-20 bg-slate-200">
            Thank You For Scrolling 
          </div>
      </div>
    </>
  );
};

export default Projects;
