import React from 'react'
import { motion } from "framer-motion"
import { Element } from 'react-scroll'

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
      <div className="absolute top-20 sm:top-24 right-6 sm:right-10 left-6 sm:left-10 flex flex-col justify-evenly items-center">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl mb-6 ml-5">
          About
        </h3>
        <Element name="about" className="flex flex-col items-center xl:flex-row text-center xl:text-left">
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
            src="/IMG-20200830-WA0011.jpg"
            className="mb-8 xl:mb-0 flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover md:w-64 md:h-64 
            xl:w-[500px] xl:h-[500px]"
          />
          <div className="space-y-4 sm:space-y-10 px-0 md:px-10">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold ">
              Here is a{" "}
              <span className="underline decoration-[#00bfff]">little</span>{" "}
              background
            </h4>
            <p className="text-nase leading-normal sm:leading-loose max-sm:max-h-300px">
              I'm Enrico, I'm 32 years old and I live in Sardinia.<br />
              I have a M.Sc. degree in Telecommunications Engineering and I'm currently working at Pluribus One as a Software Engineer.<br />
              I'm in love with innovation, and I like to experiment with new technologies and new programming languages, keeping up with technological progress.<br />
              In the free time I love surfing, druming, and obviously coding.
            </p>
          </div>
        </Element>
      </div>
    </motion.div>
  )
}

export default About