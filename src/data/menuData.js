import spag from "../assets/images/MainCourse/SPAG.jpg";
import grilled from "../assets/images/MainCourse/grilled.jpg";
import dessert from "../assets/images/Desserts/CHEESE.jpg";

export const menuData = {  // Use named export if using this name
  "main-course": [
    {
      name: "Grilled Chicken",
      price: "99.00",
      description: "Juicy grilled chicken breast served with mashed potatoes and steamed vegetables",
      image: grilled,
    },
    {
      name: "Spaghetti Bologne",
      price: "89.00",
      description: "Classic spaghetti pasta with rich Bolognese sauce and Parmesan cheese.",
      image: spag,
    },
  ],
  drinks: [
    {
      name: "Iced Tea",
      sizes: ["small", "medium", "large"],
      price: { small: "29.00", medium: "39.00", large: "49.00" },
      description: "Refreshing iced tea served with a slice of lemon.",
      image: spag,
    },
    {
      name: "Fruit Punch",
      sizes: ["small", "medium", "large"],
      price: { small: "39.00", medium: "49.00", large: "59.00" },
      description: "Tropical fruit punch with a blend of pineapple, orange, and guava juices.",
      image: spag,
    },
  ],
  desserts: [
    {
      name: "Wicked Surprise",
      price: "55.00",
      description: "Decadent chocolate cake topped with rich chocolate ganache.",
      image: dessert,
    },
    {
      name: "Banana Split",
      price: "60.00",
      description: "Creamy cheesecake on a graham cracker crust, topped with fresh strawberries.",
      image: dessert,
    },
  ],
  cakes: [
    {
      name: "Mango Cake",
      sizes: ["Slice", "Whole"],
      price: { slice: "135.00", whole: "1020.00" },
      description: "Delicious mango-flavored cake topped with fresh mango slices.",
      image: dessert,
    },
  ],
  burgers: [
    {
      name: "Cheesy Bacon Burger",
      price: "200.00",
      description: "Juicy beef patty with lettuce, tomato, and our special sauce.",
      image: spag,
    },
  ],
  coffee: [
    {
      name: "Espresso",
      price: "70.00",
      description: "Strong and bold espresso shot.",
      image: "https://via.placeholder.com/300x200",
      arModel: "models/coffee.glb", // Path to AR model
    },
    {
      name: "Latte",
      price: "100.00",
      description: "Smooth and creamy latte with steamed milk.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Americano",
      price: "80.00",
      description: "Smooth and creamy latte with steamed milk.",
      image: "https://via.placeholder.com/300x200",
    },
  ],
};
