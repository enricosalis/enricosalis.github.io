import React from 'react'
import { motion } from "framer-motion"

function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0
    w-[400px] md:w-[500px] xl:w-[800px] snap-center p-6 bg-[#34343d] opacity-40 hover:opacity-100
    cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img 
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full xl:w-[140px] xl:h-[140px] object-cover object-center"
        src="https://scontent.fcag3-1.fna.fbcdn.net/v/t1.6435-9/125163763_2498639180435899_3250193010380174891_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7X2penqhNF8AX-xQUaP&_nc_ht=scontent.fcag3-1.fna&oh=00_AfBQku7Lob96xM0S3ycc3o6AJaKGxU2yk3JNV4hduIMv_w&oe=637F4166"
      />

      <div className="px-0 md:px-6">
        <h4 className="text-3xl font-light">Software Engineer</h4>
        <p className="font-bold text-xl mt-1">Pluribus One</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-8 w-8 rounded-full"
            src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_elixir_icon_130623.png"
            alt=""
          />
          <img
            className="h-8 w-8 rounded-full"
            src="https://fullstackphoenix.com/images/phoenix-bcd92d6eab83c07e921cb06c8121321a.png?vsn=d"
            alt=""
          />
          <img
            className="h-8 w-8 rounded-full object-cover object-top"
            src="https://1000logos.net/wp-content/uploads/2020/08/PostgreSQL-Emblem-1024x640.jpg"
            alt=""
          />
        </div>
        <p className="uppercase py-2 text-gray-300">2018 - Today</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard