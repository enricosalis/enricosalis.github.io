import React from 'react'
import { Link } from "react-router-dom"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircle from "./BackgroundCircle"


function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "You shall not pass!", 
      "Winter is coming!", 
      "Naaah just kidding, welcome!",
      "My name is Enrico"
    ],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden">
      <BackgroundCircle />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
          </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#00bfff" />  
        </h1>

        <div className="pt-5">
          <Link to={}>
            <button className="heroButton">About</button>
          </Link>
          <Link>
            <button className="heroButton">Experience</button>
          </Link>
          <Link>
            <button className="heroButton">Skills</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
