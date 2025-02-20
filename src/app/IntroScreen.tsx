"use client"; // Ensure it runs only on the client side

import { motion } from "framer-motion";

const IntroScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-richBlack text-white text-4xl font-bold"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }} // Fade out after 3s + 1s fade
    >
      Dércio Fernandes
    </motion.div>
  );
};

export default IntroScreen;
