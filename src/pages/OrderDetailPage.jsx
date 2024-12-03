import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import {
  collection,
  query,
  where,
  onSnapshot,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import TimeFrameExplanation from "../components/modals/TimeFrameExplanation";
import CancelConfirmation from "../components/modals/CancelOrderConfirmation";
import { icons } from "../assets/icons/icons";
import { motion } from "framer-motion";
import { toast, Toaster } from "sonner";

const OrderDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    orderId,
    orders = [],
    price,
    status,
    expiration,
    orderType,
  } = location.state || {};
  const [modalOpen, setModalOpen] = useState(false);
  const [remainingTime, setRemainingTime] = useState(expiration - Date.now());
  const [showMore, setShowMore] = useState(false);
  const [newStatus, setNewStatus] = useState("Pending");
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const openCancelModal = () => setIsCancelModalOpen(true);

  const closeCancelModal = () => setIsCancelModalOpen(false);

  const handleCancelOrder = async () => {
    try {
      const q = query(
        collection(db, "orders"),
        where("OrderID", "==", orderId)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });

        toast.success("Your order is now canceled.", {
          duration: 2000,
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        alert("No order found with this ID.");
      }
    } catch (error) {
      console.error("Error canceling the order:", error);
      alert("Failed to cancel the order. Please try again later.");
    } finally {
      setIsCancelModalOpen(false);
    }
  };

  useEffect(() => {
    const q = query(collection(db, "orders"), where("OrderID", "==", orderId));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          setNewStatus(data.Status);
        });
      }
    });

    return () => unsubscribe();
  }, [orderId]);

  useEffect(() => {
    if (newStatus === "Serving" || newStatus === "Served") return;
    const countdownInterval = setInterval(() => {
      const timeLeft = expiration - Date.now();
      setRemainingTime(timeLeft);

      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        alert("Time has run out for this order. Please place an order again.");
        navigate("/");
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [expiration]);

  const formatTime = (timeInMs) => {
    const totalSeconds = Math.floor(timeInMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const visibleOrders = showMore ? orders : orders.slice(0, 2);

  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center px-2 my-5"
      >
        <div className="flex flex-col items-center justify-center border border-[#ff8418] shadow-lg bg-white px-10 py-5 rounded-lg max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-[#ff8418] mb-5">
            Order Confirmation
          </h1>

          <div className="text-lg text-gray-800 mb-5 space-y-2 w-full">
            <div className="flex justify-between">
              <span className="font-semibold">Order:</span>
              <span>{orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Status:</span>
              <span
                className={`font-semibold ${
                  newStatus === "Served"
                    ? "text-green-600"
                    : newStatus === "Serving"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {newStatus}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Total Price:</span>
              <span>&#8369;{price}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Order Type:</span>
              <span>{orderType}</span>
            </div>
          </div>

          <div className="w-full h-[2px] bg-gray-200 mb-5"></div>

          <div className="w-full">
            <h2 className="font-bold text-xl text-center mb-2">Order Items</h2>
            {orders.length > 0 ? (
              <div className="space-y-3">
                {visibleOrders.map((order, index) => (
                  <div
                    key={index}
                    className="flex flex-col p-2 bg-gray-50 rounded-md shadow-sm"
                  >
                    <div className="flex justify-between">
                      <span className="font-semibold">Name:</span>
                      <span>{order.item}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Quantity:</span>
                      <span>{order.Quantity}</span>
                    </div>
                    {order.Variation && (
                      <div className="flex justify-between">
                        <span className="font-semibold">Size:</span>
                        <span>{order.Variation}</span>
                      </div>
                    )}
                    {order.Note && (
                      <div className="flex justify-between">
                        <span className="font-semibold">Note:</span>
                        <span>{order.Note}</span>
                      </div>
                    )}
                  </div>
                ))}
                {orders.length > 2 && (
                  <button
                    className="text-sm text-blue-500 underline cursor-pointer mt-2"
                    onClick={() => setShowMore(!showMore)}
                  >
                    {showMore ? "See Less" : "See More"}
                  </button>
                )}
              </div>
            ) : (
              <p className="text-gray-500 text-center">No orders found.</p>
            )}
          </div>
        </div>
        {newStatus === "Pending" ? (
          <div className="flex flex-col items-center justify-center mt-5">
            <h1 className="text-3xl font-bold">{formatTime(remainingTime)}</h1>
            <h1 className="text-xl font-bold text-pretty text-[#ff8418] text-center">
              Please proceed to the counter and pay to complete your order.
            </h1>
            <button
              className="mt-5 px-6 py-2 bg-transparent border border-red-500 font-semibold rounded-lg shadow-md"
              onClick={openCancelModal}
            >
              Cancel Order
            </button>
          </div>
        ) : newStatus === "Serving" ? (
          <div className="flex flex-col items-center justify-center px-4 py-6 bg-white shadow-md rounded-lg max-w-md mx-auto my-8">
            {icons.chefHat}
            <h1 className="text-2xl font-bold text-[#ff8418] text-center mb-3">
              Your order is being prepared!
            </h1>
            <p className="text-md text-center text-gray-700">
              Our team is working on your delicious meal.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-4 py-6 bg-white shadow-md rounded-lg max-w-md mx-auto my-8">
            {icons.spoonFork}
            <h1 className="text-2xl font-bold text-[#ff8418] text-center mb-3">
              Your order is ready!
            </h1>
            <p className="text-md text-center text-gray-700">
              Your order is ready and waiting for you. Please proceed to the
              counter to pick it up. <br />
              Thank you for choosing us!
            </p>
          </div>
        )}
        <p
          className="text-sm text-blue-500 underline cursor-pointer mt-3"
          onClick={() => setModalOpen(true)}
        >
          Why is there a time frame to complete my order?
        </p>
      </motion.div>
      {modalOpen && (
        <TimeFrameExplanation onClose={() => setModalOpen(false)} />
      )}
      <CancelConfirmation
        isOpen={isCancelModalOpen}
        onClose={closeCancelModal}
        onConfirm={handleCancelOrder}
      />
      <Toaster richColors position="bottom-center" />
    </div>
  );
};

export default OrderDetailPage;
