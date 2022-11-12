import React from 'react'
import { motion } from "framer-motion"
import { ExperienceCardOne, ExperienceCardTwo } from "./ExperienceCard"

export function WorkExperience() {
  return (
    <motion.div 
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5
      }}     
      className="h-screen relative flex overflow-hidden max-w-full px-6 sm:px-10 mx-auto">
      <div className="absolute top-20 sm:top-24 left-0 right-0 flex flex-col items-center">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl ml-5">
          Experience
        </h3>

        {/* <div id="work-experience" className="w-full flex overflow-x-scroll px-6 py-8 sm:p-10 
        snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 
        scrollbar-thumb-[#00bfff]/80"> */}
        <div id="work-experience" className="flex overflow-x-auto gap-10 snap-x snap-mandatory 
        py-8 sm:py-10 px-20">
          <ExperienceCardOne />
          <ExperienceCardTwo />
        </div>
      </div>
    </motion.div>
  )
}
