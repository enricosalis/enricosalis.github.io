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
        <div className="absolute border border-[#3A3A3A] h-[200px] w-[200px]
        mt-52 animate-pulse_slow rotate-[20deg]"/>
        <div className="absolute border border-[#3A3A3A] h-[300px] w-[300px]
        mt-52 animate-pulse_slow -rotate-[50deg]"/>
        <div className="absolute border border-[#3A3A3A] h-[500px] w-[500px]
        mt-52 animate-pulse_slow"/>
        <div className="absolute border border-[#00bfff] opacity-20 h-[650px] w-[650px]
        mt-52 animate-pulse -rotate-[15deg]"/>
        <div className="absolute border border-[#3A3A3A] h-[800px] w-[800px]
        mt-52 animate-pulse_slow rotate-[70deg]"/>
        <div />
    </motion.div>
  )
}

export default BackgroundCircle