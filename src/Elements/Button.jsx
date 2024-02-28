import React from "react";
import { motion } from "framer-motion";
import './Elements.css';
export function ButtonMaterialize({ propertys }) {
  return (
    <button
      className="btn waves-effect waves-light"
      onClick={propertys.action}
      style={propertys.style}
    >
      {propertys.text}
    </button>
  );
}

export function ButtonAnimate({ propertys }) {
  return (
    <motion.button
      className="textTransform"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={propertys.action}
      style={propertys.style}
    >
      {propertys.text}
    </motion.button>
  );
}
