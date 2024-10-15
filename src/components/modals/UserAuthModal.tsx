import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../Button";
import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setFalse } from "../../redux/authModalSlice";
import { RootState } from "../../redux/store";

const UserAuthModal: React.FC = () => {
  const dispatch = useDispatch();
  const showAuthModal = useSelector(
    (state: RootState) => state.authModal.value
  );

  return (
    <AnimatePresence>
      {showAuthModal && (
        <motion.div
          className="absolute top-0 left-0 h-screen w-full bg-neutral-900 flex flex-col justify-center items-center"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          exit={{
            opacity: 0,
            scale: 0,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
        >
          <Link to="login">
            <Button buttonText="Log In" />
          </Link>
          <Link to="regsiter">
            <Button buttonText="Register" />
          </Link>
          <IoIosClose
            className="text-[3rem] absolute top-10 right-10 text-white hover:cursor-pointer active:scale-90 duration-300"
            onClick={() => dispatch(setFalse())}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { UserAuthModal };
