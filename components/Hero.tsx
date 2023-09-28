"use client"
import Image from "next/image"
import React from "react"
import Fiyin from "../app/assets/images/fiyin.jpg"

const Hero = () => {
  return (
    <div className="pt-[150px]">
      <div className="mx-auto flex-col md:flex-row flex max-w-[80%]  justify-evenly items-center  ">
        <div className="order-last md:order-1 text-center md:text-left py-9">
          <h3 className="text-2xl  md:text-4xl">
            Frontend <span className="text-rose-500">Developer</span>
          </h3>
          <h1 className="text-3xl md:text-4xl">
            Hi, I'm <span className="text-rose-500">Agbetile</span> Fiyin from
            Nigeria
          </h1>
        </div>
        <div className="order-1">
          <Image
            className=" rounded-full w-[200px] md:w-[500px] "
            src={Fiyin}
            width={300}
            height={300}
            alt="fiyin"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
