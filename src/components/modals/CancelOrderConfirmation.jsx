import React from "react";
import { motion } from "framer-motion";

const CancelConfirmation = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <motion.div
        className="bg-white rounded-lg p-4 w-[80%] max-w-sm"
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
        <h2 className="text-xl font-semibold mb-4">Cancel Order</h2>
        <p className="text-gray-600 mb-4">
          Are you sure you want to cancel your order? This action cannot be
          undone.
        </p>

        <div className="flex justify-between">
          <button
            className="bg-gray-500 text-white font-semibold px-4 py-2 rounded"
            onClick={onClose}
          >
            Keep It
          </button>

          <button
            className="bg-[#ff8428] text-white font-semibold px-4 py-2 rounded"
            onClick={onConfirm}
          >
            Cancel Order
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CancelConfirmation;
