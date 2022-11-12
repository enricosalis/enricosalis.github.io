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
    <div className="h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden">
      <BackgroundCircle />
      <div className="flex flex-col w-full sm:w-auto items-start sm:items-center z-20 text-left sm:text-center">
        <h2 className="text-xs sm:text-sm uppercase text-white pb-4 px-4 sm:px-10 tracking-[10px] sm:tracking-[15px]">
          &lt;Software Engineer/&gt;
          </h2>
        <h1 className="text-6xl text-left sm:text-center font-semibold px-4 sm:px-10 
        min-h-[255px] sm:min-h-[160px] md:min-h-[135px]">
          <span className="bg-clip-text text-transparent
          bg-gradient-to-r from-[#00bfff] to-[#c716fd]">{text}</span>
          <Cursor cursorColor="#ffffff" />  
        </h1>

        <div className="hidden sm:block">
          <a href="/"
          onClick={e => {
            let about = document.getElementById("about");
            e.preventDefault();
            about.scrollIntoView({ behaviour: 'smooth' });
          }}>
            <button className="heroButton">About</button>
          </a>
          <a href="#experience">
            <button className="heroButton">Experience</button>
          </a>
          {/* <button className="heroButton">Skills</button> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
