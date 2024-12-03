import { useNavigate } from "react-router-dom";
import { menu } from "../data/menuData";
import { icons } from "../assets/icons/icons";
import { motion } from "framer-motion";

const FoodCard = (props) => {
  const navigate = useNavigate();

  const handleARClick = (item) => {
    navigate("/arView", {
      state: {
        modelPath: item.model,
        name: item.name,
        description: item.description,
      },
    });
  };

  return (
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
      className="px-2 max-w-[630px] grid gap-6"
    >
      {menu[props.category].map((item, index) => (
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 overflow-hidden"
          key={index}
        >
          <div className="relative">
            <img
              className="w-full h-56 object-cover"
              src={item.image}
              alt={item.name}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
            <h3 className="absolute bottom-0 left-0 p-4 flex flex-col justify-end">
              <span className="text-[#ff8418] font-bold text-xl mb-2">
                &#8369;{item.price}
              </span>
              <span className="text-2xl font-bold text-white">{item.name}</span>
            </h3>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-600">{item.description}</p>
            <div className="flex justify-between items-center mt-4">
              <div
                className="cursor-pointer hover:text-[#ff8418] transition-colors duration-300"
                onClick={() => handleARClick(item)}
              >
                {icons.ar}
              </div>
              <button className="bg-[#ff8418] text-white font-bold text-xl rounded-full px-5 py-2 flex items-center hover:bg-[#ff6f2f] transition-colors duration-300">
                {icons.plus}
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FoodCard;
