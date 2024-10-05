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
    <div className="-mx-10 px-10 sm:-mx-20 sm:px-20 lg:-mx-32 lg:px-32 xl:-mx-40 xl:px-40 2xl:-mx-60 2xl:px-60 py-8 md:py-10 bg-neutral-400  w-screen flex flex-col-reverse items-center md:flex md:flex-row md:items-center md:justify-between ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 flex flex-col items-center text-center md:text-left md:items-start gap-2"
      >
        <motion.div
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-[4xl] xl-text-[2.5rem] font-extrabold"
        >
          Your One-Stop PC Destination
        </motion.div>
        <motion.div variants={itemVariants} className="mb-6 text-sm md:text-base">
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

      <img src={heroimage} alt="HEROIMAGE" className="flex-1 w-64 md:h-72 mb-4 object-contain drop-shadow-[45px_45px_45px_rgba(0,16,20,1)]" />
    </div>
  );
};

export { Hero };
