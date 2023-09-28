"use client"
import React, { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { ModeToggle } from "./Darkmode"

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className=" w-full z-20 fixed opacity-90 flex items-center justify-between">
        <div className=" flex items-center h-16 px-4">
          <h1 className=" text-xl gradient-text font-semibold">Portfolio.</h1>
        </div>
        <div className="hidden md:inline-block">
          <ul className="flex gap-6 ">
            <li className="nav gradient-text ">
              <a className="tracking-[5px]" href="#home">
                Home
              </a>
            </li>
            <li className="nav gradient-text ">
              <a className="tracking-[5px]" href="#about">
                About
              </a>
            </li>
            <li className=" nav gradient-text ">
              <a className="tracking-[5px]" href="#skill">
                Skill
              </a>
            </li>
            <li className=" nav gradient-text ">
              <a className="tracking-[5px]" href="#projects">
                Projects
              </a>
            </li>
            <li className=" nav gradient-text">
              <a className="tracking-[5px]" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center gap-6 mr-4">
          <div className=" md:hidden flex">
            <button
              className="gradient-text"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? null : <AiOutlineMenu className="" size={30} />}
            </button>
          </div>
          <ModeToggle />
        </div>
      </div>
    </>
  )
}

export default NavBar
