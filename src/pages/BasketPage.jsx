import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { BasketContext } from "../context/BasketContext";
import OrderConfirmation from "../components/modals/OrderConfirmation";
import EditMenu from "../components/modals/EditMenuPage";
import ErrorMessage from "../components/modals/ErrorMessage";
import { motion } from "framer-motion";

const BasketPage = () => {
  const navigate = useNavigate();
  const { basketItems, setBasketItems } = useContext(BasketContext);
  const [isModalOpen, setIsmodalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showError, setShowError] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [selectedOrderType, setSelectedOrderType] = useState("Dine In");

  const handleAddItems = () => {
    navigate(-2);
  };

  const handleEditItems = (item) => {
    setIsmodalOpen(true);
    setSelectedItem(item);
  };

  const handleSaveChanges = (updatedItem) => {
    if (updatedItem === null) {
      setBasketItems((prevItems) =>
        prevItems.filter((item) => item.id !== selectedItem.id)
      );
    } else {
      setBasketItems((prevItems) =>
        prevItems.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        )
      );
    }
    setIsmodalOpen(false);
  };

  const handleCloseModal = () => {
    setIsmodalOpen(false);
    setSelectedItem(null);
  };

  const handleOrderTypeChange = (orderType) => {
    setSelectedOrderType(orderType);
  };

  const handleSubmitMenu = () => {
    if (basketItems && basketItems.length > 0) {
      const generateOrderID = () => Math.floor(1000 + Math.random() * 9000);
      const orderID = generateOrderID();
      const expirationTime = Date.now() + 15 * 60 * 1000;

      const currentDate = new Date();
      const formattedDate = `${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${currentDate
        .getDate()
        .toString()
        .padStart(2, "0")}/${currentDate.getFullYear()}`;

      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedTime = `${(hours % 12 || 12)
        .toString()
        .padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${ampm}`;

      const newOrderData = {
        OrderID: orderID,
        Status: "Pending",
        Orders: basketItems.map((item) => {
          return {
            item: item.name,
            Quantity: item.quantity,
            Price: item.price,
            Variation: item.size || "",
            Note: item.note || "",
          };
        }),
        TotalPrice: basketItems.reduce(
          (total, item) => total + parseFloat(item.price),
          0
        ),
        OrderType: selectedOrderType,
        Expiration: expirationTime,
        OrderDate: `${formattedDate} ${formattedTime}`,
      };

      setOrderData(newOrderData);
      setShowConfirmation(true);
    } else {
      setShowError(true);
    }
  };

  const handleConfirmOrder = () => {
    setIsConfirming(true);

    setTimeout(async () => {
      try {
        const ordersCollection = collection(db, "orders");
        const docRef = await addDoc(ordersCollection, orderData);

        setShowConfirmation(false);
        setOrderData(null);

        navigate("/order-detail", {
          state: {
            orderId: orderData.OrderID,
            orders: orderData.Orders,
            price: orderData.TotalPrice,
            status: orderData.Status,
            orderType: orderData.OrderType,
            expiration: orderData.Expiration,
          },
        });
        setBasketItems([]);
        localStorage.clear();
      } catch (error) {
        console.error("Error placing order: ", error);
        alert("Failed to place order. Please try again.");
      } finally {
        setIsConfirming(false);
      }
    }, 5000);
  };

  const handleCancelOrder = () => {
    setShowConfirmation(false);
    setOrderData(null);
  };

  const totalAmount = basketItems.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );

  return (
    <motion.div
      className="max-w-[630px] m-auto overflow-auto"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Navbar />

      <div className="flex justify-between items-center px-4 my-6">
        <h1 className="font-bold text-2xl text-gray-800">Order Summary</h1>
        <h1
          className="text-[#ff8428] text-lg cursor-pointer"
          onClick={handleAddItems}
        >
          Add Items
        </h1>
      </div>

      <div className="px-4 max-h-[350px] overflow-y-auto">
        {basketItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center w-full gap-5 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-[#ff8428] border border-[#ff8428] rounded px-[7px]">
              {item.quantity}x
            </span>

            <div className="flex flex-grow flex-col justify-between">
              <span className="font-semibold text-lg text-gray-800">
                {item.name}
              </span>
              <span className="text-sm text-gray-600">{item.size || ""}</span>
              <span
                className="text-[#1D72B8] text-xs cursor-pointer"
                onClick={() => handleEditItems(item)}
              >
                Edit
              </span>
            </div>

            <span className="text-lg font-semibold text-gray-800">
              &#8369;{item.price}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 px-4 pb-28">
        <h2 className="font-semibold text-lg text-gray-800 mb-3">
          How would you like to enjoy your order?
        </h2>

        <div
          className={`flex items-center p-4 border rounded-lg mb-4 transition-all ${
            selectedOrderType === "Dine In"
              ? "border-[#ff8428] bg-[#ff8428] bg-opacity-10"
              : "border-gray-300"
          }`}
          onClick={() => handleOrderTypeChange("Dine In")}
        >
          <input
            checked={selectedOrderType === "Dine In"}
            id="Dine In"
            type="radio"
            value="Dine In"
            name="order-type"
            onChange={(e) => e.stopPropagation()}
            className="w-4 h-4 bg-gray-100 border-gray-300"
          />
          <label
            htmlFor="Dine In"
            className="ml-3 text-sm font-medium text-gray-800"
          >
            Dine In
          </label>
        </div>

        <div
          className={`flex items-center p-4 border rounded-lg transition-all ${
            selectedOrderType === "Take Out"
              ? "border-[#ff8428] bg-[#ff8428] bg-opacity-10"
              : "border-gray-300"
          }`}
          onClick={() => handleOrderTypeChange("Take Out")}
        >
          <input
            checked={selectedOrderType === "Take Out"}
            id="Take Out"
            type="radio"
            value="Take Out"
            name="order-type"
            onChange={(e) => e.stopPropagation()}
            className="w-4 h-4 bg-gray-100 border-gray-300"
          />
          <label
            htmlFor="Take Out"
            className="ml-3 text-sm font-medium text-gray-800"
          >
            Take Out
          </label>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-5 py-4 px-6 border-t bg-white z-[1] shadow-lg max-w-[630px] m-auto">
        <div className="flex justify-between w-full text-xl text-gray-800">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">&#8369;{totalAmount.toFixed(2)}</span>
        </div>

        <button
          className="bg-[#ff8428] w-full text-lg font-bold text-white px-6 py-3 rounded-xl shadow-lg transition-all hover:bg-[#e68142]"
          onClick={handleSubmitMenu}
        >
          Place Order
        </button>
      </div>

      {showConfirmation && (
        <OrderConfirmation
          onConfirm={handleConfirmOrder}
          onCancel={handleCancelOrder}
          isConfirming={isConfirming}
        />
      )}
      {showError && <ErrorMessage />}
      {isModalOpen && (
        <EditMenu
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          item={selectedItem}
          onSave={handleSaveChanges}
        />
      )}
    </motion.div>
  );
};

export default BasketPage;
