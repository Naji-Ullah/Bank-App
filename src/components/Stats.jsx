import React from "react";
import { stats } from "../constants";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const statsVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Stats = () => (
  <div className="flex flex-col items-center bg-gradient-to-r from-black via-gray-800 to-black py-10 px-4">
    <motion.section
      className="flex flex-wrap justify-center gap-8 w-full max-w-7xl"
      variants={statsVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {stats.map((stat) => (
        <motion.div key={stat.id} variants={statVariants} className="flex justify-center">
          <CountUp
            start={0}
            end={stat.value}
            delay={0.5}
            prefix={stat.prefix}
            suffix={stat.suffix}
            enableScrollSpy={true}
            scrollSpyOnce={true}
          >
            {({ countUpRef }) => (
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
                <h4
                  ref={countUpRef}
                  className="font-poppins font-bold text-[clamp(2rem,5vw,3.5rem)] text-white"
                />
                <p className="font-poppins font-medium text-[clamp(1.2rem,3vw,2rem)] bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-50 inline-block text-transparent bg-clip-text uppercase sm:ml-4 mt-2 sm:mt-0 whitespace-nowrap">
                  {stat.title}
                </p>
              </div>
            )}
          </CountUp>
        </motion.div>
      ))}
    </motion.section>
  </div>
);

export default Stats;
