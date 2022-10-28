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
      className="h-screen relative flex flex-col md:flex-row overflow-hidden 
      max-w-full px-10 mx-auto">
      <div className="absolute top-24 right-10 left-10 bottom-0 flex flex-col items-center">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
          Experience
        </h3>

        <div className="w-full flex space-x-20 sm:space-x-20 md:space-x-56 xl:space-x-96
        overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#00bfff]/80">
          <ExperienceCardOne />
          <ExperienceCardTwo />
        </div>
      </div>
    </motion.div>
  )
}
