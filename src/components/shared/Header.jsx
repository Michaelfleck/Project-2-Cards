import React from "react";
import Logo from "../../images/Logo";
import Sun from "../../images/Sun";
import Moon from "../../images/Moon";
import { useState } from "react";
import Reference from "../../../assets/images/desktop-design-dark.jpg";
import ReferenceActive from "../../../design/desktop-design-dark-hover.jpg";
import ReferenceLight from "../../../design/desktop-design-light.jpg";
import ReferenceLightHover from "../../../design/desktop-design-light-hover.jpg";

// Light top #ebf2fc
// Light bottom #effbf9

function Header({ mode, toggleMode }) {

  return (
    <>
    <div className={mode === "dark" ? "dark" : "light"}>
      <div className="flex justify-between px-4 sm:px-6 lg:px-8 my-12 py-4 dark:bg-[#1f2535] bg-[#fcfdff]  rounded-3xl light:shadow-lg light:border border-[#e2e9f1] dark:border-transparent">
        <div className="flex">
          <Logo mode={mode} />
        </div>
        <div className="flex flex-col items-center justify-center dark:bg-[#2d354a] bg-[#edeeee] rounded-lg px-2 py-2 hover:bg-[#c5c5c4] dark:hover:bg-[#3a415b] cursor-pointer">
          <button className="cursor-pointer" onClick={toggleMode}>
            {mode === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Header;
