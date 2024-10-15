import React from "react";
import heroimage from "../../assets/heroimage.webp";
import { Button } from "../../components/Button";
import { IoIosArrowDown } from "react-icons/io";
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
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative h-[90vh] px-8 flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full ">
        <img
          src={heroimage}
          alt="HEROIMAGE"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-70"></div>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-neutral-100 text-center gap-4"
      >
        <motion.div
          variants={itemVariants}
          className="font-salsa text-4xl md:text-[2.5rem] lg:text-[3rem] xl-text-[3.5rem]"
        >
          Your One-Stop PC Destination
        </motion.div>
        <motion.div variants={itemVariants} className="text-sm lg:text-base">
          Custom PCs, pre-built systems, and laptops—all in one place. <br />
          Built for performance, designed for you.
        </motion.div>
        <motion.div className="mt-4" variants={itemVariants}>
          <Link to="products">
            <Button buttonText="Shop Now" />
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-12 "
      >
        <IoIosArrowDown className="text-2xl text-white" />
      </motion.div>
    </div>
  );
};

export { Hero };
