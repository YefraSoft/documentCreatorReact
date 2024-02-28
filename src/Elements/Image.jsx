import React from 'react';
import { motion } from "framer-motion";

export function Image({property}) {
  return (
    <motion.div className="underline" layoutId="underline" >
        <console className="log">{property.src}</console>
        <img src='../assets/Splash.jpg'  alt='notFound'/>
    </motion.div>
  )
}
