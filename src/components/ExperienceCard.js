import React from 'react'
import { motion } from "framer-motion"

export function ExperienceCardOne() {
  return (
    <div className="min-w-full">
      <article className="flex flex-col rounded-md items-center flex-shrink-0
      w-[270px] sm:w-[500px] md:w-[680px] xl:w-[900px] snap-center py-6 px-6 sm:px-10 mx-auto bg-[#34343d]
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
          src="https://scontent.fcag3-1.fna.fbcdn.net/v/t1.6435-9/125163763_2498639180435899_3250193010380174891_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7X2penqhNF8AX-xQUaP&_nc_ht=scontent.fcag3-1.fna&oh=00_AfBQku7Lob96xM0S3ycc3o6AJaKGxU2yk3JNV4hduIMv_w&oe=637F4166"
        />

        <div className="px-0 md:px-0 mt-6">
          <h4 className="text-2xl sm:text-3xl tracking-wider">Software Engineer</h4>
          <p className="font-bold text-xl mt-1 text-gray-300">Pluribus One</p>
          <p className="py-2 text-gray-300">February 2018 - Today</p>

          <ul className="list-disc space-y-4 ml-5 mt-8 text-md text-gray-300">
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
      w-[270px] sm:w-[500px] md:w-[680px] xl:w-[900px] snap-center py-10 px-6 md:px-10 mx-auto bg-[#34343d]
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
          src="https://pbs.twimg.com/profile_images/781537084163194880/vGEYfshd_400x400.jpg"
        />

        <div className="px-0 md:px-0 mt-10">
          <h4 className="text-2xl sm:text-3xl tracking-wider">Researcher</h4>
          <p className="font-bold text-xl mt-1 text-gray-300">PRALab</p>
          <p className="py-2 text-gray-300">April 2015 - July 2017</p>

          <ul className="list-disc space-y-4 ml-5 mt-8 text-md">
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
