import React from "react";
import "./Elements.css";
import { motion } from "framer-motion";

export function Image({ img }) {
  return (
    <motion.img
      className="w-75 rounded-circle"
      initial={{
        opacity: 0,
      }}
      src={img}
      alt="notFound-404"
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
    />
  );
}
