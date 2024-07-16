import React, { useEffect } from "react";
import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Aboutus = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div
        id="about"
        className="mt-20 p-20 bg-gray-50 dark:bg-slate-900 dark:text-white"
      >
        <div
          className="bg-slate-200 h-20 rounded-2xl dark:bg-slate-600 dark:text-white"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="text-2xl pt-4 font-sans font-bold border-b-4  dark:border-b-white w-56  border-b-black mb-20 ml-20 ">
            About Me
          </div>
        </div>

        <div className="flex justify-center gap-20 items-center mt-[50px]">
          {/* img */}
          <div data-aos="zoom-out-down" data-aos-duration="2500">
            <div className="About-1 my-4"></div>
          </div>

          {/* text */}
          <div className=" w-[32rem]">
            <div className="text-2xl font-bold my-2 text-left animate-flyinBottom1">
              <div data-aos="fade-left" data-aos-duration="1700">
                My Self Karthik
              </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="2500">
              <div className="ml-5 animate-flyinBottom1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                accusantium eveniet delectus voluptas dolores a aspernatur
                necessitatibus, eaque dignissimos iure voluptate veniam
                reprehenderit tempore perspiciatis minima neque praesentium at
                temporibus. Quas possimus cumque, unde repellat expedita esse
                neque explicabo at voluptatibus maiores, sunt qui. Minima hic
                cumque, fugit sequi accusantium velit! Nisi nobis molestias
                esse, amet nam molestiae animi earum natus et fugiat quis illo
                blanditiis veritatis quibusdam. Et minus esse inventore nostrum
                eos aspernatur deserunt, voluptatibus maiores dicta obcaecati
                error quia quae impedit suscipit a enim excepturi nemo, tempora
                autem molestias. Magni necessitatibus error eos. Praesentium
                ducimus quo placeat.
              </div>
            </div>
            <div className="flex justify-center items-center gap-20 gap-x-auto mt-4 m-auto animate-flyinBottom1">
              <a data-aos="zoom-in-up" data-aos-duration="1500" href="#skills">
                <button className="border hover:bg-opacity-80 bg-blue-600 px-8 py-4 rounded-full text-white font-sans font-bold text-lg">
                  Skiils
                </button>
              </a>
              <div data-aos="zoom-in-up" data-aos-duration="1800">
                <a
                  href="https://drive.google.com/file/d/1QjR879VPUL42R5WTKU7yNaezdtT2V-v3/view?usp=sharing"
                  target="blank"
                >
                  <button className="border hover:bg-opacity-80 bg-green-600 px-8 py-4 rounded-full text-white font-sans font-bold text-lg">
                    Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
