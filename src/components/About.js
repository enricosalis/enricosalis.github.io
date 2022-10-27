import React from 'react'
import { motion } from "framer-motion"

function About() {
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
      className="h-screen relative text-center md:text-left max-w-7xl px-10 mx-auto">
      <div className="absolute top-24 right-10 left-10 flex flex-col justify-evenly items-center">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-8">
          About
        </h3>
        <div className="flex flex-col items-center xl:flex-row text-center xl:text-left">
          <motion.img 
            initial={{
              x: -200,
              opacity: 0
            }}
            transition={{
              duration: 1.2
            }}
            whileInView={{
              x: 0,
              opacity: 1
            }}
            viewport={{ once: true }}
            src="https://i.pinimg.com/736x/68/a5/aa/68a5aa104457ecac4d4136285a830e3e.jpg"
            className="mb-8 xl:mb-0 flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover md:w-64 md:h-64 
            xl:w-[500px] xl:h-[500px]"
          />
          <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-3xl md:text-4xl font-semibold ">
              Here is a{" "}
              <span className="underline decoration-[#00bfff]">little</span>{" "}
              background
            </h4>
            <p className="text-nase">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About