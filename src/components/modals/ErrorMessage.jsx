import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full text-center transform transition-all duration-300 ease-in-out scale-95 hover:scale-100"
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
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          You don't have any orders.
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Looks like you haven't placed any orders yet. Ready to order something
          delicious?
        </p>
        <div className="flex justify-center mt-6">
          <button
            className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-orange-600 transition-colors duration-300 ease-in-out"
            onClick={() => navigate("/cakes-desserts")}
          >
            Order Here
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderConfirmation;
