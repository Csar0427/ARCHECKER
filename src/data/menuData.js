import spag from "../assets/images/MainCourse/SPAG.jpg";
import grilled from "../assets/images/MainCourse/grilled.jpg";
import dessert from "../assets/images/Desserts/CHEESE.jpg";

export const menu = {
  "main-course": [
    {
      name: "Grilled Chicken",
      price: "99.00",
      description:
        "Juicy grilled chicken breast served with mashed potatoes and steamed vegetables",
      image: grilled,
    },
    {
      name: "Spaghetti Bologne",
      price: "89.00",
      description:
        "Classic spaghetti pasta with rich Bolognese sauce and Parmesan cheese.",
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
      description:
        "Tropical fruit punch with a blend of pineapple, orange, and guava juices.",
      image: spag,
    },
  ],
  desserts: [
    {
      name: "Wicked Surprise",
      price: "55.00",
      description:
        "Decadent chocolate cake topped with rich chocolate ganache.",
      image: dessert,
    },
    {
      name: "Banana Split",
      price: "60.00",
      description:
        "Creamy cheesecake on a graham cracker crust, topped with fresh strawberries.",
      image: dessert,
      model: "/models/Banana split.glb",
    },
    {
      name: "Cookie ala Mode",
      price: "90.00",
      description:
        "Creamy cheesecake on a graham cracker crust, topped with fresh strawberries.",
      image: dessert,
    },
    {
      name: "Fried Ice Cream",
      price: "120.00",
      description:
        "Creamy cheesecake on a graham cracker crust, topped with fresh strawberries.",
      image: dessert,
      model: "/models/new ice.glb",
      
    },
  ],
  cakes: [
    {
      name: "Mango Cake",
      sizes: ["Slice", "Whole"],
      price: { slice: "135.00", whole: "1020.00" },
      description:
        "Delicious mango-flavored cake topped with fresh mango slices.",
      image: dessert,
      model: "/models/mango.glb",
    },
    {
      name: "Blueberry",
      sizes: ["Slice", "Whole"],
      price: { slice: "135.00", whole: "1020.00" },
      description:
        "Rich and moist chocolate cake with a creamy chocolate frosting.",
      image: dessert,
      model: "/models/cake.glb",
    },
    {
      name: "Strawberry",
      sizes: ["Slice", "Whole"],
      price: { slice: "135.00", whole: "1020.00" },
      description:
        "Rich and moist chocolate cake with a creamy chocolate frosting.",
      image: dessert,
      model: "/models/cake.glb",
    },
    {
      name: "Ube",
      sizes: ["Slice", "Whole"],
      price: { slice: "135.00", whole: "1020.00" },
      description:
        "Rich and moist chocolate cake with a creamy chocolate frosting.",
      image: dessert,
      model: "/models/cake.glb",
    },
  ],
  burgers: [
    {
      name: "Cheesy Bacon Burger",
      price: "200.00",
      description:
        "Juicy beef patty with lettuce, tomato, and our special sauce.",
      image: spag,
      model: "/models/burgerss.glb",

    },
    {
      name: "Caramelized Onion Burger",
      price: "150.00",
      description:
        "Beef patty with melted cheese, pickles, onions, and ketchup.",
      image: spag,
      model: "/models/burgerss.glb",
    },
    {
      name: "Three meat Burger",
      price: "200.00",
      description:
        "Beef patty topped with crispy bacon, cheddar cheese, and BBQ sauce.",
      image: spag,
      model: "/models/burgerss.glb",
    },
    {
      name: "Knights of the Table (Mini Burgers)",
      price: "240.00",
      description:
        "Grilled veggie patty with avocado, lettuce, tomato, and vegan mayo.",
      image: spag,
      model: "/models/burgerss.glb",
    },
    {
      name: "Clubhouse",
      price: "150.00",
      description:
        "Grilled veggie patty with avocado, lettuce, tomato, and vegan mayo.",
      image: spag,
    },
    {
      name: "Tuna Sandwich",
      price: "100.00",
      description:
        "Grilled veggie patty with avocado, lettuce, tomato, and vegan mayo.",
      image: spag,
      model: "/models/Tuna.glb",
    },
    {
      name: "TMC signature Burger",
      price: "160.00",
      description:
        "Grilled veggie patty with avocado, lettuce, tomato, and vegan mayo.",
      image: spag,
    },
  ],
  coffee: [
    {
      name: "Espresso",
      price: "70.00",
      description: "Strong and bold espresso shot.",
      image: dessert,
      model: "/models/TMG ICE COFFEE.glb",
    },
    {
      name: "Latte",
      price: "100.00",
      description: "Smooth and creamy latte with steamed milk.",
      image: "https://via.placeholder.com/300x200",
      model: "/models/kape.glb",
    },
    {
      name: "Americano",
      price: "80.00",
      description: "Smooth and creamy latte with steamed milk.",
      image: "https://via.placeholder.com/300x200",
      model: "/models/kape.glb",
    },
    {
      name: "Doppio",
      price: "90.00",
      description: "Smooth and creamy latte with steamed milk.",
      image: "https://via.placeholder.com/300x200",
      model: "/models/kape.glb",
    },
    {
      name: "Cappucino",
      price: "100.00",
      description: "Smooth and creamy latte with steamed milk.",
      image: "https://via.placeholder.com/300x200",
      model: "/models/kape.glb",
    },
    {
      name: "Caffe Affogato",
      price: "110.00",
      description: "Smooth and creamy latte with steamed milk.",
      image: "https://via.placeholder.com/300x200",
      model: "/models/kape.glb",
    },
    {
      name: "Cafe Mocha White Mocha",
      price: "110.00",
      description: "Smooth and creamy latte with steamed milk.",
      image: "https://via.placeholder.com/300x200",
      model: "/models/kape.glb",
    },
    {
      name: "Flat White",
      price: "110.00",
      description: "Smooth and creamy latte with steamed milk.",
      image: "https://via.placeholder.com/300x200",
      model: "/models/kape.glb",
    },
    {
      name: "Caramel Macchiato",
      price: "110.00",
      description: "Smooth and creamy latte with steamed milk.",
      image: "https://via.placeholder.com/300x200",
      model: "/models/kape.glb",
    },
  ],
};
