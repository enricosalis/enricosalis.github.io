import React from 'react'
import { Link } from "react-scroll"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircle from "./BackgroundCircle"


function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "You shall not pass!", 
      "Winter is coming!", 
      "Just kidding, you're welcome!",
      "My name is Enrico"
    ],
    loop: true,
    delaySpeed: 2000
  });
  
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden">
      <BackgroundCircle />
      <div className="z-20">
        <h2 className="text-xs sm:text-sm uppercase text-gray-500 pb-4 tracking-[10px] sm:tracking-[15px]">
          Software Engineer
          </h2>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#00bfff" />  
        </h1>

        <div className="pt-8">
          <Link activeClass="active" to="about" spy={ true } smooth={ true }>
            <button className="heroButton">About</button>
          </Link>
          <Link activeClass="active" to="experience" spy={ true } smooth={ true }>
            <button className="heroButton">Experience</button>
          </Link>
          <Link activeClass="active" to="skills" spy={ true } smooth={ true }>
            <button className="heroButton">Skills</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
