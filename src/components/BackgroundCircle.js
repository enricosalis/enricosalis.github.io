import { motion } from "framer-motion"
import React from 'react'

function BackgroundCircle() {
  return (
    <motion.div 
      initial={{
        opacity: 0
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0]
      }}
      transition={{
        duration: 2.5
      }}
      className="relative flex justify-center items-center z-10"
    >
        <div className="absolute border border-[#3A3A3A] 
        h-[100px] w-[100px] md:h-[150px] md:w-[150px] xl:h-[200px] xl:w-[200px]
        mt-52 animate-pulse_slow rotate-[20deg]"/>
        <div className="absolute border border-[#3A3A3A] 
        h-[150px] w-[150px] md:h-[200px] md:w-[200px] xl:h-[300px] xl:w-[300px]
        mt-52 animate-pulse_slow -rotate-[50deg]"/>
        <div className="absolute border border-[#3A3A3A] 
        h-[300px] w-[300px] md:h-[400px] md:w-[400px] xl:h-[500px] xl:w-[500px]
        mt-52 animate-pulse_slow"/>
        <div className="absolute border border-[#00bfff] opacity-20 
        h-[450px] w-[450px] md:h-[550px] md:w-[550px] xl:h-[650px] xl:w-[650px]
        mt-52 animate-pulse -rotate-[15deg]"/>
        <div className="absolute border border-[#3A3A3A] 
        h-[650px] w-[650px] md:h-[750px] md:w-[750px] xl:h-[850px] xl:w-[850px]
        mt-52 animate-pulse_slow rotate-[70deg]"/>
        <div />
    </motion.div>
  )
}

export default BackgroundCircle