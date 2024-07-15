import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="mt-0 p-20 bg-gray-50 dark:bg-slate-900 dark:text-white" >
      <div className="bg-slate-200 h-20 rounded-2xl dark:bg-slate-600 dark:text-white">
        <div className="text-2xl pt-4 font-sans font-bold border-b-4  dark:border-b-white w-56  border-b-black mb-20 ml-20">
          Skills
        </div>
      </div>

      <div className="flex justify-center items-center gap-12 mt-28">
        <div className="py-8 px-4 w-80 border-2 shadow-gray-500 shadow-2xl rounded-2xl text-center">
          <div className="text-blue-700 font-bold font-sans text-[22px]">
            Web Design
          </div>
          <div className="text-gray-700 p-2 mx-1 dark:text-white">
            Design is where I experiment, innovate, and create unique visuals
            before I start developing.
          </div>
        </div>

        <div className="py-8 px-4 w-80 border-2 shadow-gray-500 shadow-2xl rounded-2xl text-center">
          <div className="text-blue-700 font-bold font-sans text-[22px]">
            Web Development
          </div>
          <div className="text-gray-700 p-2 mx-2 dark:text-white">
          I am a Full Stack Web Developer proficient in MERN and MEAN stacks.
          </div>
        </div>

        <div className="py-8 px-4 w-80 border-2 shadow-gray-500 shadow-2xl rounded-2xl text-center">
          <div className="text-blue-700 font-bold font-sans text-[22px]">
            Problem Solving
          </div>
          <div className="text-gray-700 p-2 mx-1 dark:text-white">
            I love solving problems whether programming problems or real life
            problems.
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-14 gap-28 h-96 font-bold" >
        <div className="flex justify-center items-center flex-col " >
          <div className="my-2 py-2 px-4 text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-green-200" >HTML</div>
          <div className="my-2 py-2 px-4 text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-green-200 " >CSS</div>
          <div className="my-2 py-2 px-4 text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-green-200 " >TAILWIND CSS</div>
          <div className="my-2 py-2 px-4 text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-green-200 " >BOOTSTRAP</div>
          <div className="my-2 py-2 px-4 text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-green-200 " >JAVASCRIPT</div>
        </div>
        <div className="flex justify-center items-center flex-col" >
          <div className="my-2 py-2 px-4 text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-red-200" >NODE JS</div>
          <div className="my-2 py-2 px-4 text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-red-200" >REACT JS</div>
          <div className="my-2 py-2 px-4 text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-red-200" >ANGULAR JS</div>
          <div className="my-2 py-2 px-4 text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-red-200" >MONGO DB</div>
          <div className="my-2 py-2 px-4 text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-red-200" >REDUX</div>
        </div>
        <div className="flex justify-center items-center flex-col" >
          <div className="my-2 py-2 px-4 text-lg text-gray-500 hover:border-b-2 rounded-lg hover:text-black hover:border-b-black hover:bg-blue-200 " >EXPRESS JS</div>
          <div className="my-2 py-2 px-4 text-lg text-gray-500 hover:border-b-2 rounded-lg hover:text-black hover:border-b-black hover:bg-blue-200 " >GIT</div>
          <div className="my-2 py-2 px-4 text-lg text-gray-500 hover:border-b-2 rounded-lg hover:text-black hover:border-b-black hover:bg-blue-200 " >JAVA</div>
          <div className="my-2 py-2 px-4 text-lg text-gray-500 hover:border-b-2 rounded-lg hover:text-black hover:border-b-black hover:bg-blue-200 " >C</div>
          <div className="my-2 py-2 px-4 text-lg text-gray-500 hover:border-b-2 rounded-lg hover:text-black hover:border-b-black hover:bg-blue-200 " >My SQL</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
