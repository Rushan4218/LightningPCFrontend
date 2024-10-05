import React from "react";
import heroimage from "../../assets/heroimage.png";
import { Button } from "../General/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="-mx-60 px-60 bg-neutral-400 h-[45vh] w-screen flex items-center justify-between">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start gap-2"
      >
        <motion.div
          variants={itemVariants}
          className="text-[3rem] font-extrabold"
        >
          Your One-Stop PC Destination
        </motion.div>
        <motion.div variants={itemVariants} className="mb-6">
          Custom PCs, pre-built systems, and laptops—all in one place.
          <br /> Built for performance, designed for you.
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link to="/products">
            {" "}
            <Button buttonText="Shop Now" />{" "}
          </Link>
        </motion.div>
      </motion.div>

      <img src={heroimage} alt="HEROIMAGE" className="h-full gradient-bg" />
    </div>
  );
};

export { Hero };
