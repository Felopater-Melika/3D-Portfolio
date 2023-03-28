"use client";

import React from "react";
// @ts-ignore
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "@/styles";
import { services } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";
import Image from "next/image";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: any;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        // options={{
        //   max: 45,
        //   scale: 1,
        //   speed: 450,
        // }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <Image
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="about">
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hello! I&apos;m Felopater, a passionate full-stack developer
        specializing in React and Next.js. Although I have only one year of
        professional experience, my journey into the world of development began
        in high school, where I taught myself programming just to try a new
        thing and this is how I discovered my passion. My dedication to learning
        and my ability to pick up new concepts quickly have allowed me to
        complete various personal projects and two successful freelance jobs. As
        a self-taught developer, I take pride in being efficient, responsible,
        and always eager to enhance my skills. I genuinely believe that my love
        for development goes beyond just a career—it&apos;s also my hobby. Feel
        free to browse my portfolio to see the projects I&apos;ve worked on and
        get a glimpse of my capabilities. If you&apos;re interested in
        collaborating or have any questions, don&apos;t hesitate to reach out!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
