import React from 'react'
import { motion } from "framer-motion"

export function ExperienceCardOne() {
  return (
    <div className="min-w-full">
      <article className="flex flex-col rounded-md items-center flex-shrink-0
      w-[310px] sm:w-[500px] md:w-[680px] xl:w-[900px] snap-center py-6 px-6 sm:px-10 mx-auto bg-[#34343d]
      overflow-x-hidden overflow-y-auto max-h-[550px] sm:max-h-[620px] 
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#00bfff]/80">
        <motion.img 
          initial={{
            y: -100,
            opacity: 0
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 xl:w-[140px] xl:h-[140px] rounded-full object-cover object-center"
          src="/PO_logo_bg_green.png"
        />

        <div className="px-0 md:px-0 mt-6">
          <h4 className="text-2xl sm:text-3xl tracking-wider">Software Engineer</h4>
          <p className="font-bold text-xl mt-1 text-gray-300">Pluribus One</p>
          <p className="py-2 text-gray-300">February 2018 - Today</p>

          <ul className="list-disc space-y-4 ml-5 mt-8 text-sm sm:text-md text-gray-300">
            <li>Backend design and development: Elixir, Phoenix, Python, Django</li>
            <li>Frontend design and development: HTML, CSS, Javascript, React</li>
            <li>Database design: PostgreSQL</li>
            <li>Message brocker: RabbitMQ</li>
            <li>DevOps: Bitbucket Pipelines, GitLab Pipelines</li>
            <li>Container: Podman, Docker</li>
          </ul>
        </div>
      </article>
    </div>
  )
}

export function ExperienceCardTwo() {
  return (
    <div className="min-w-full">
      <article className="flex flex-col rounded-md items-center flex-shrink-0
      w-[310px] sm:w-[500px] md:w-[680px] xl:w-[900px] snap-center py-10 px-6 md:px-10 mx-auto bg-[#34343d]
      overflow-x-hidden overflow-y-auto max-h-[550px] sm:max-h-[620px] 
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#00bfff]/80">
        <motion.img 
          initial={{
            y: -100,
            opacity: 0
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 xl:w-[140px] xl:h-[140px] rounded-full object-cover object-center"
          src="/pralab_logo.png"
        />

        <div className="px-0 md:px-0 mt-10">
          <h4 className="text-2xl sm:text-3xl tracking-wider">Researcher</h4>
          <p className="font-bold text-xl mt-1 text-gray-300">PRALab</p>
          <p className="py-2 text-gray-300">April 2015 - July 2017</p>

          <ul className="list-disc space-y-4 ml-5 mt-8 text-sm sm:text-md">
            <li>Web Application security</li>
            <li>Machine Learning</li>
            <li>Backend design and development: Python, Django</li>
            <li>Frontend design and development: HTML, CSS, Javascript</li>
          </ul>
        </div>
      </article>
    </div>
  )
}
