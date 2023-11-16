'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Veggies from "../componenents/Veggies";
import Trending from "../componenents/Trending";

const Dishes = () => {
    return (
        <motion.div
          key="my_key"
          animate={{opacity: 1}}
          initial={{opacity: 0}}
          exit={{opacity: 0}}
          transition={{duration: 3}}
        >
            <Veggies />
            <Trending />
        </motion.div>
    )
}

export default Dishes