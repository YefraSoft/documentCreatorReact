import React from "react";
import { motion } from "framer-motion";
import "./Elements.css";

export function LabelTittle({ text }) {
  return (
    <motion.h1
      className="font fw-bolder "
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
    >
      {text}
    </motion.h1>
  );
}

export function Label({ text }) {
  return (
    <motion.h4
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
    >
      {text}
    </motion.h4>
  );
}
export function LabelSubTittle() {
  return <div>Label</div>;
}
