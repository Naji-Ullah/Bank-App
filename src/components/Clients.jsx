import React from "react";
import { clients } from "../constants";
import styles from "../style";
import { motion } from "framer-motion";

const clientsVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const clientVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const imgVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
    },
  },
};

const Clients = () => (
    <div  className="flex flex-col items-center bg-gradient-to-r from-black via-gray-800 to-black py-25">
  <section id="clients" className={`${styles.flexCenter} my-4`}>
    <motion.div
      className={`${styles.flexCenter}  flex-wrap w-full gap-20 `}
      variants={clientsVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {clients.map((client) => (
        <motion.div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
          variants={clientVariants}
        >
          <motion.img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain drop-shadow-[0_0_1px_white]"
            variants={imgVariants}
            whileHover="hover"
          />
        </motion.div>
      ))}
    </motion.div>
  </section>
  </div>
);

export default Clients;
