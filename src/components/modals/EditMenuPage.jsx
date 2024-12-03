import React, { useState } from "react";
import { icons } from "../../assets/icons/icons";
import DeleteConfirmation from "../modals/DeleteConfirmation";
import { motion } from "framer-motion";

const EditMenu = ({ isOpen, onClose, item, onSave }) => {
  const [quantity, setQuantity] = useState(item.quantity || 1);
  const [selectedSize, setSelectedSize] = useState(item.size || "");
  const [pricePerItem, setPricePerItem] = useState(
    item.itemPrice[selectedSize] || item.price / item.quantity
  );
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    setSelectedSize(newSize);

    if (item.itemPrice[newSize]) {
      setPricePerItem(parseFloat(item.itemPrice[newSize]));
    }
  };

  const handleIncrease = () => {
    if (quantity >= 9) {
      alert("You can't order more than 9 items.");
    } else {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      setShowDeleteModal(true);
    }
  };

  const handleSave = () => {
    if (quantity < 1) {
      onSave(null);
    } else {
      const updatedItem = {
        ...item,
        quantity,
        ...(item.size && { size: selectedSize }),
        price: (pricePerItem * quantity).toFixed(2),
      };
      onSave(updatedItem);
    }
    onClose();
  };

  const handleConfirmDelete = () => {
    onSave(null);
    onClose();
    setShowDeleteModal(false);
  };

  const updatedPrice = (pricePerItem * quantity).toFixed(2);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity ease-in-out duration-300">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-lg"
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
        <h2 className="text-2xl font-semibold mb-6 text-center">Edit Item</h2>

        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-4">
            <button
              onClick={handleDecrease}
              className="bg-[#ff8428] text-white p-2 rounded-full transition-transform transform hover:scale-105"
            >
              {icons.minus}
            </button>
            <span className="font-semibold border-2 border-[#ff8428] px-4 py-2 rounded">
              {quantity}x
            </span>
            <button
              onClick={handleIncrease}
              className="bg-[#ff8428] text-white p-2 rounded-full transition-transform transform hover:scale-105"
            >
              {icons.plus}
            </button>
          </div>

          <div className="text-center flex flex-col justify-center items-center">
            <span className="font-semibold text-lg">{item.name}</span>
            <p className="text-lg font-semibold mt-1">&#8369;{updatedPrice}</p>
          </div>
        </div>

        {item.size && item.category === "milktea & fruittea" && (
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3">Select Size</h3>
            {["Regular", "Large", "1 Liter"].map((size) => (
              <div key={size} className="flex items-center mb-1">
                <input
                  type="radio"
                  id={size}
                  name="size"
                  value={size}
                  checked={selectedSize === size}
                  onChange={handleSizeChange}
                  className="mr-2"
                />
                <label className="text-lg">{size}</label>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between gap-4 pt-6">
          <button
            className="bg-gray-400 text-white px-6 py-2 rounded-md font-semibold transition-colors hover:bg-gray-500"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="bg-[#ff8428] text-white px-6 py-2 rounded-md font-semibold transition-colors hover:bg-[#e5781f]"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </motion.div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmation
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default EditMenu;
