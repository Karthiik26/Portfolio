import React, { useEffect, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Togglebtn from "./ToggleBtn";
import { useLocation, useNavigate } from "react-router-dom";
import img from "../assets/contact1.png"

const Contact = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const nav = useNavigate();

  const [Dark, setDark] = useState();

  function ToggleDarkmode() {
    const x = localStorage.getItem("darkMode");
    setDark(x);
    if (Dark === "true") {
    }
    console.log("--------" + Dark);
  }

  return (
    <>
      <div id="Contact" className="dark:bg-slate-900 dark:text-white">
        <div className="flex justify-between mx-20 my-4 items-center m-auto gap-4">
          <button
            className="p-2 dark:hover:bg-slate-500 hover:bg-black hover:text-white rounded-full"
            onClick={() => nav("/")}
          >
            <FaArrowAltCircleLeft size={24} />
          </button>
          <button onClick={() => ToggleDarkmode()}>
            <Togglebtn size={24} />
          </button>
        </div>
        <div className="flex justify-center items-center pb-24">
          <div className=" w-[950px] rounded-lg shadow-2xl dark:shadow-slate-100 shadow-slate-400 py-6">
            <div className="flex justify-center items-center flex-col">
              <div className="text-3xl font-sans font-extrabold tracking-wider" >Contact Me</div>
              <div className="text-md font-sans font-bold tracking-wide">Let's connect and turn your ideas into reality!</div>
              <div className="flex justify-center items-center flex-row gap-6">
                <div>
                  <img src={img} width={450} alt="" />
                </div>
                <div className="mt-1 mb-16">
                  <form>
                    {/* <div className="text-2xl font-sans font-bold">Contact</div> */}
                    <div className="flex flex-col mt-[10px]">
                      <label htmlFor="Name">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="Name"
                        type="text"
                        className="border px-4 py-2 rounded-md border-black dark:text-black text-md my-1"
                      />
                    </div>
                    <div className="flex flex-col mt-[10px]">
                      <label htmlFor="Email">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="Email"
                        className="border px-4 py-2 rounded-md border-black dark:text-black text-md my-1"
                      />
                    </div>
                    <div className="flex flex-col mt-[10px]">
                      <label htmlFor="Phone">Phone</label>
                      <input
                        type="text"
                        id="Phone"
                        className="border px-4 py-2 rounded-md border-black dark:text-black text-md my-1"
                      />
                    </div>
                    <div className="flex flex-col mt-[10px]">
                      <label htmlFor="message" className="mb-[5px]">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        id="Message"
                        cols="32"
                        rows="4"
                        className="border px-4 py-2 rounded-md  border-black dark:text-black text-md my-1"
                      ></textarea>
                    </div>
                    <div className="flex flex-col mt-5">
                      <button className="py-2 hover:bg-green-600 hover:text-white text-black bg-yellow-300 text-lg font-semibold tracking-wide rounded-md">
                        Contact
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
