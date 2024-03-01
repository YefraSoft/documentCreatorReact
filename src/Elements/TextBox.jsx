import React from "react";
import "./Elements.css";
import { motion } from "framer-motion";

export default function TextBox({ propertys }) {
  return (
    <motion.input
      className="form-control"
      type={propertys.type}
      placeholder={propertys.hold}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
    />
  );
}
