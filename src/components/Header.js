import { motion } from "framer-motion"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header() {
  return (
    <header className="sticky top-0 py-8 px-4 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center ">
      <motion.div 
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className="flex flex-row items-center gap-5"
      >
        <a href="https://www.linkedin.com/in/enrico-salis/">
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} 
          className="text-xl hover:text-[#00bfff]" />
        </a>
        <a href="https://twitter.com/salis_enrico">
          <FontAwesomeIcon icon={['fab', 'twitter']} 
          className="text-xl hover:text-[#8250FE]" />
        </a>
        <a href="https://github.com/enricosalis">
          <FontAwesomeIcon icon={['fab', 'github']} 
          className="text-xl hover:text-[#c716fd]" />
        </a>
      </motion.div>

      {/* <motion.div 
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5
      }}
      className="flex flex-row item-center text-gray-300 cursor-pointer">
        <SocialIcon 
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400 my-auto">
          Get in touch
        </p>
      </motion.div> */}
    </header>
  )
}


export default Header