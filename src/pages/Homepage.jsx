import Navbar from "../components/Navbar";
import HeaderImage from "../assets/images/TMCBG.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Homepage = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/cakes-desserts");
  };

  return (
    <div className="w-full">
      <Navbar />
      <div
        className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeaderImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-center justify-center px-5 max-w-[750px] w-full text-center text-white"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: "-100%" },
              show: { opacity: 1, x: 0 },
            }}
            className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-wide mb-5"
          >
            Indulge in Great Food and Robust Coffee
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: "100%" },
              show: { opacity: 1, x: 0 },
            }}
            className="text-lg sm:text-xl font-semibold mb-8 opacity-90"
          >
            Begin your morning with a taste that lives up to its aroma.
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: "-100%" },
              show: { opacity: 1, x: 0 },
            }}
          >
            <button
              className="bg-[#ff8418] text-white px-12 py-4 rounded-full text-lg font-bold transition-transform transform hover:scale-105 hover:shadow-lg"
              onClick={handleOrderNow}
            >
              Order Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;
