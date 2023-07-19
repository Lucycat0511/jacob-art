"use client";

import { useState } from "react";

export default function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="fixed flex flex-col bottom-4 left-4">
      <p style={{ writingMode: "vertical-rl" }} className=" mb-4">
        {darkMode ? "Dark" : "Light"} Mode
      </p>
      <input
        id="darkModeSwitch"
        type="checkbox"
        className="absolute overflow-hidden w-[1px] h-[1px] left-4"
        onChange={() => {
          document.documentElement.classList.toggle("dark");
          setDarkMode(!darkMode);
        }}
      ></input>
      <label
        htmlFor="darkModeSwitch"
        className={` h-12 w-7 relative rounded-2xl cursor-pointer align text-[0px]
          ${darkMode ? "bg-[#201158]" : "bg-[#03a9f4]"}
          transition-color ease-in-out duration-200`}
      >
        <div
          className={`bg-[#e8e8e8] shadow-lg h-6 w-6 rounded-full absolute left-[2px]
          ${darkMode ? "top-[22px]" : "top-[2px]"}
          transition-all ease-in-out duration-200`}
        ></div>
        Select
      </label>
    </div>
  );
}
