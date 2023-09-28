import Image from "next/image"
import React, { lazy } from "react"
import Fiyin2 from "../app/assets/images/fiyin3.jpg"
const AboutMe = () => {
  return (
    <div className="">
      <div className="mx-auto flex-col md:flex-row flex max-w-[80%]  justify-evenly items-center">
        <div>
          <Image
            className=" rounded-lg "
            src={Fiyin2}
            loading="lazy"
            width={400}
            height={400}
            alt="fiyin"
          />
        </div>
        <div>
          <h1>About Me</h1>
          <p>
            Sed tempus facilisis sapien, eget efficitur erat porta vel. Proin
            quis sem hendrerit, dapibus sem vel, facilisis tellus. Cras varius
            augue turpis, vel convallis mi gravida id. Cras a nibh justo.
            Vivamus ullamcorper turpis mi, nec rhoncus velit volutpat id. Fusce
            posuere arcu odio, et sagittis dolor laoreet ut.
          </p>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
