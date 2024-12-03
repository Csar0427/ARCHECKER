import React from "react";
import { motion } from "framer-motion";
import { icons } from "../../assets/icons/icons";

const OrderConfirmation = ({ onConfirm, onCancel, isConfirming }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full transform transition-transform duration-300 ease-out scale-95 hover:scale-100"
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
        {isConfirming ? (
          <>
            <h2 className="text-2xl font-semibold text-center text-[#333] mb-6">
              Confirming Your Order
            </h2>
            <div className="flex justify-center gap-4 my-4">
              <span>{icons.coffeeLoading}</span>
            </div>
            <p className="text-gray-600 text-center">
              Please wait while we process your order. This may take a few
              moments.
            </p>
          </>
        ) : (
          <>
            {" "}
            <h2 className="text-2xl font-semibold text-center text-[#333] mb-6">
              Confirm Your Order
            </h2>
            <p className="text-center text-lg text-pretty text-[#555] mb-6">
              Please review your order details before confirming.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                className="bg-[#ff8428] text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-[#e67e22] focus:outline-none focus:ring-2 focus:ring-[#e67e22] focus:ring-opacity-50"
                onClick={onConfirm}
                disabled={isConfirming}
              >
                Confirm
              </button>
              <button
                className="bg-gray-300 text-black px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default OrderConfirmation;
