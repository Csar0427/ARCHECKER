import React from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/icons/travelmug-logo.png";

const TimeFrameExplanation = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <motion.div
        className="flex flex-col items-center justify-center bg-[#161616] p-5 rounded-lg shadow-lg max-w-sm w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1.1, 0.95, 1],
          opacity: 1,
        }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.42, 0, 0.58, 1],
        }}
      >
        <img className="w-40" src={Logo} alt="TMC Logo" />
        <h1 className="text-pretty text-justify text-white mt-4">
          The time limit for completing your order helps ensure that we manage
          our orders efficiently. If the payment isn't completed within the
          allotted time, your order will be automatically removed.
        </h1>
        <div className="mt-4">
          <button
            className="bg-[#ff8428] text-white font-semibold px-4 py-2 rounded-xl hover:bg-[#e67322] transition-all duration-200"
            onClick={onClose}
          >
            Got it!
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default TimeFrameExplanation;
