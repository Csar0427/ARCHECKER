import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { BasketContext } from "../context/BasketContext";
import OrderConfirmation from "../components/modals/OrderConfirmation";
import EditMenu from "../components/modals/EditMenuPage";

const BasketPage = () => {
  const navigate = useNavigate();
  const { basketItems, setBasketItems } = useContext(BasketContext);
  const [isModalOpen, setIsmodalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [confirmOrder, setConfirmOrder] = useState(false);

  const handleAddItems = () => {
    navigate("/cakes&desserts");
    navigate(-1);
  };

  const handleEditItems = (item) => {
    setIsmodalOpen(true);
    setSelectedItem(item);
  };

  const handleSaveChanges = (updatedItem) => {
    if (updatedItem === null) {
      // Remove the item from the basket
      setBasketItems((prevItems) =>
        prevItems.filter((item) => item.id !== selectedItem.id)
      );
    } else {
      // Update the item in the basket
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

  const handleSubmitMenu = () => {
    const generateOrderID = () => Math.floor(1000 + Math.random() * 9000);
    const orderID = generateOrderID();
    const expirationTime = Date.now() + 1 * 60 * 10000;

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
      Expiration: expirationTime,
      OrderDate: `${formattedDate} ${formattedTime}`,
    };

    setOrderData(newOrderData);
    setShowConfirmation(true);
  };

  const handleConfirmOrder = async () => {
    try {
      const ordersCollection = collection(db, "orders");
      const docRef = await addDoc(ordersCollection, orderData);

      setShowConfirmation(false);
      setOrderData(null);
      alert("Order placed successfully!");

      navigate("/order-detail", {
        state: {
          orderId: orderData.OrderID,
          orders: orderData.Orders,
          price: orderData.TotalPrice,
          status: orderData.Status,
        },
      });
    } catch (error) {
      console.error("Error placing order: ", error);
      alert("Failed to place order. Please try again.");
    }
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
    <div className="h-screen overflow-auto">
      <Navbar />

      <div className="flex justify-between items-center px-3 my-5">
        <h1 className="font-bold text-xl">Order Summary</h1>
        <h1 className="text-[blue] text-md" onClick={handleAddItems}>
          Add Items
        </h1>
      </div>

      <div className="px-3">
        {basketItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center w-full gap-5 py-4 border-b"
          >
            {/* Quantity */}
            <span className="font-semibold border border-[#ff8428] px-1">
              {item.quantity}x
            </span>

            {/* Name and Edit */}
            <div className="flex flex-grow flex-col justify-between">
              <span className="font-semibold text-lg">{item.name}</span>
              <span>{item.size ? item.size : ""}</span>
              <span
                className="text-[blue] text-xs cursor-pointer"
                onClick={() => handleEditItems(item)}
              >
                Edit
              </span>
            </div>

            {/* Price */}
            <span className="text-lg font-semibold">&#8369;{item.price}</span>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-5 py-3 px-5 border-t rounded-xl z-[1] bg-[whitesmoke]">
        <div className="flex justify-between w-full text-xl">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">&#8369;{totalAmount.toFixed(2)}</span>
        </div>

        <button
          className="bg-[#ff8428] w-full text-lg font-bold text-white px-6 py-2 rounded-xl"
          onClick={handleSubmitMenu}
        >
          Place Order
        </button>
      </div>

      {showConfirmation && (
        <OrderConfirmation
          onConfirm={handleConfirmOrder}
          onCancel={handleCancelOrder}
        />
      )}
      {isModalOpen && (
        <EditMenu
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          item={selectedItem}
          onSave={handleSaveChanges}
        />
      )}
    </div>
  );
};

export default BasketPage;
