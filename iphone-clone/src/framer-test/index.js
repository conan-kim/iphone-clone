"use client";

import React from "react";
import { motion } from "framer-motion";

const FramerTest = () => {
  const list = { hidden: { opacity: 0 } };
  const item = { hidden: { x: -10 } };
  const scrollVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };
  return (
    <div className="flex flex-col min-h-[500px] max-w-screen-lg mx-auto">
      <motion.div className="bg-red-400" animate={{ x: 100 }}>
        Move Right
      </motion.div>
      <motion.div
        className="bg-green-400"
        whileHover={{ x: 20 }}
        whileTap={{ rotate: 2 }}
      >
        Move right on hover / rotate on tap
      </motion.div>
      <motion.ul animate="hidden" variants={list}>
        <motion.li variants={item}>hidden</motion.li>
        <motion.li variants={item}>hidden</motion.li>
        <motion.li variants={item}>hidden</motion.li>
        <motion.li variants={list}>hidden</motion.li>
      </motion.ul>
      <div className="h-[1000px]" />
      <motion.div
        className="bg-yellow-400 h-40"
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
      >
        Scroll Test on 80%
        <motion.div variants={scrollVariants}>Hello?</motion.div>
      </motion.div>
    </div>
  );
};

export default FramerTest;
