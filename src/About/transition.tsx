// src/components/Transition.tsx
import { motion } from "framer-motion";
import React from "react";

interface TransitionProps {
  children: React.ReactNode;
  delay?: number;
}

const Transition: React.FC<TransitionProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="relative z-10"
    >
      {children}
    </motion.div>
  );
};

export default Transition;
