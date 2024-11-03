//cakes & desserts
import blackForest from "../assets/images/Cakes & Desserts/Black forest.jpg";
import chocolateCake from "../assets/images/Cakes & Desserts/ChocolateCake.jpg";
import friedIceCream from "../assets/images/Cakes & Desserts/Fried Ice Cream.jpg";
import lamington from "../assets/images/Cakes & Desserts/LAMINGTON.jpg";
import mangoCake from "../assets/images/Cakes & Desserts/Mango Cake.jpg";
import mangoCheeseCake from "../assets/images/Cakes & Desserts/mango cheese cake.jpg";
import milkteaCake from "../assets/images/Milktea & Fruittea/MILKTEA CAKE.jpg";
import wickedOreos from "../assets/images/Cakes & Desserts/Wicked Oreos.jpg";

// coffee & glaciers
import cappuccino from "../assets/images/Coffee & Glaciers/CAPPUCCINO.jpg";
import caramelMach from "../assets/images/Coffee & Glaciers/CARAMEL MACH.jpg";
import cookiesNCreamGlaciers from "../assets/images/Coffee & Glaciers/COOKIES AND CREAM GLACIERS.jpg";
import latte from "../assets/images/Coffee & Glaciers/LATTE.jpg";
import strawberryGlaciers from "../assets/images/Coffee & Glaciers/STAWBERRY GLACIERS.jpg";
import tmcCoffee from "../assets/images/Coffee & Glaciers/TMC COFFEE.jpg";

// milktea & fruittea
import charcoal from "../assets/images/Milktea & Fruittea/CHARCOAL.jpg";
import greenAppleFruitTea from "../assets/images/Milktea & Fruittea/GREEN APPLE  FRUIT TEA.png";
import mangoFruitTea from "../assets/images/Milktea & Fruittea/MANGO FRUITTEA.jpg";
import matchaMango from "../assets/images/Milktea & Fruittea/MATCHA MANGO.jpg";
import nutellaMilktea from "../assets/images/Milktea & Fruittea/NUTELLA MILKTEA.png";
import oreoMilktea from "../assets/images/Milktea & Fruittea/OREO MILKTEA.png";
import passionFruitea from "../assets/images/Milktea & Fruittea/PASSION  FRUITEA.png";
import strawberryLycheeFruitea from "../assets/images/Milktea & Fruittea/STRAWBERRY LYCHEE FRUITTEA.jpg";
import tmcMilktea from "../assets/images/Milktea & Fruittea/TMC MILKTEA.png";

// pasta & sandwiches
import carbonara from "../assets/images/Pasta & Sandwiches/CARBONARA.jpg";
import fishNChips from "../assets/images/Pasta & Sandwiches/FISH & CHIPS.jpg";
import knigthsOfTheTable from "../assets/images/Pasta & Sandwiches/Knights of the Table.jpg";
import lasagna from "../assets/images/Pasta & Sandwiches/LASAGNA.jpg";
import NuggetsNFries from "../assets/images/Pasta & Sandwiches/Nuggets and fries.jpg";
import TunaPesto from "../assets/images/Pasta & Sandwiches/TUNA PESTO.jpg";

export const menu = {
  "cakes & desserts": [
    {
      name: "Black Forest",
      price: "99.00",
      description:
        "Juicy grilled chicken breast served with mashed potatoes and steamed vegetables",
      image: blackForest,
      model: "/models/Black Forest.glb",
    },
    {
      name: "Chocolate Cake",
      price: "89.00",
      description:
        "Classic spaghetti pasta with rich Bolognese sauce and Parmesan cheese.",
      image: chocolateCake,
      model: "/models/Chocolate Cake.glb",
    },
    {
      name: "Fried Ice Cream",
      price: "89.00",
      description:
        "Classic spaghetti pasta with rich Bolognese sauce and Parmesan cheese.",
      image: friedIceCream,
      model: "/models/Fried Ice Cream.glb",
    },
    {
      name: "Lamington",
      price: "89.00",
      description:
        "Classic spaghetti pasta with rich Bolognese sauce and Parmesan cheese.",
      image: lamington,
      model: "/models/Lamington.glb",
    },
    {
      name: "Mango Cake",
      price: "89.00",
      description:
        "Classic spaghetti pasta with rich Bolognese sauce and Parmesan cheese.",
      image: mangoCake,
      model: "/models/mango cake.glb",
    },
    {
      name: "Mango Cheese Cake",
      price: "89.00",
      description:
        "Classic spaghetti pasta with rich Bolognese sauce and Parmesan cheese.",
      image: mangoCheeseCake,
      model: "/models/cheesecake.glb",
    },
    {
      name: "Milktea Cake",
      price: "55.00",
      description:
        "Decadent chocolate cake topped with rich chocolate ganache.",
      image: milkteaCake,
      model: "/models/MILKTEA CAKE.glb",
    },
    {
      name: "Wicked Oreos",
      price: "89.00",
      description:
        "Classic spaghetti pasta with rich Bolognese sauce and Parmesan cheese.",
      image: wickedOreos,
      model: "/models/Wicked Oreos.glb",
    },
  ],
  "coffee & glaciers": [
    {
      name: "Cappucino",
      price: "100.00",
      description: "Refreshing iced tea served with a slice of lemon.",
      image: cappuccino,
      model: "models/Capuccino.glb",
    },
    {
      name: "Caramel Mach",
      price: "110.00",
      description:
        "Tropical fruit punch with a blend of pineapple, orange, and guava juices.",
      image: caramelMach,
      model: "models/Caramel Mach.glb",
    },
    {
      name: "Cookies and Cream Glaciers",
      price: "110.00",
      description:
        "Tropical fruit punch with a blend of pineapple, orange, and guava juices.",
      image: cookiesNCreamGlaciers,
      model: "models/FRAPPE.glb",
    },
    {
      name: "Latte",
      price: "100.00",
      description:
        "Tropical fruit punch with a blend of pineapple, orange, and guava juices.",
      image: latte,
      model: "models/Capuccino.glb",
    },
    {
      name: "Strawberry Glaciers",
      price: "110.00",
      description:
        "Tropical fruit punch with a blend of pineapple, orange, and guava juices.",
      image: strawberryGlaciers,
      model: "models/Strawberry Glacier.glb",
    },
    {
      // price for this item is just placeholder - no price yet.
      name: "TMC Coffee",
      price: "100.00",
      description:
        "Tropical fruit punch with a blend of pineapple, orange, and guava juices.",
      image: tmcCoffee,
      model: "models/Capuccino.glb",
    },
  ],
  "milktea & fruittea": [
    {
      name: "Charcoal",
      sizes: ["Regular", "Large", "1 Liter"],
      price: { Regular: "85.00", Large: "100", "1 Liter": "110" },
      description:
        "Decadent chocolate cake topped with rich chocolate ganache.",
      image: charcoal,
      model: "models/charcoal.glb",
    },
    {
      name: "Green Apple Fruit Tea",
      sizes: ["Regular", "Large", "1 Liter"],
      price: { Regular: "85.00", Large: "100", "1 Liter": "110" },
      description:
        "Decadent chocolate cake topped with rich chocolate ganache.",
      image: greenAppleFruitTea,
      model: "models/GREEN TEA.glb",
    },
    {
      name: "Mango Fruit Tea",
      sizes: ["Regular", "Large", "1 Liter"],
      price: { Regular: "85.00", Large: "100", "1 Liter": "110" },
      description:
        "Decadent chocolate cake topped with rich chocolate ganache.",
      image: mangoFruitTea,
      model: "models/MANGO.glb",
    },
    {
      name: "Matcha Mango",
      sizes: ["Regular", "Large", "1 Liter"],
      price: { Regular: "85.00", Large: "100", "1 Liter": "110" },
      description:
        "Decadent chocolate cake topped with rich chocolate ganache.",
      image: matchaMango,
      model: "models/MATCHA MANGO.glb",
    },
    {
      name: "Nutella Milktea",
      sizes: ["Regular", "Large", "1 Liter"],
      price: { Regular: "85.00", Large: "100", "1 Liter": "110" },
      description:
        "Decadent chocolate cake topped with rich chocolate ganache.",
      image: nutellaMilktea,
      model: "models/NUTELLA.glb",
    },
    {
      name: "Oreo Milk Tea",
      sizes: ["Regular", "Large", "1 Liter"],
      price: { Regular: "85.00", Large: "100", "1 Liter": "110" },
      description:
        "Decadent chocolate cake topped with rich chocolate ganache.",
      image: oreoMilktea,
      model: "models/OREO.glb",
    },
    {
      name: "Passion Fruit Tea",
      sizes: ["Regular", "Large", "1 Liter"],
      price: { Regular: "85.00", Large: "100", "1 Liter": "110" },
      description:
        "Decadent chocolate cake topped with rich chocolate ganache.",
      image: passionFruitea,
      model: "models/PASSION.glb",
    },
    {
      name: "Strawberry Lychee Fruit Tea",
      sizes: ["Regular", "Large", "1 Liter"],
      price: { Regular: "85.00", Large: "100", "1 Liter": "110" },
      description:
        "Decadent chocolate cake topped with rich chocolate ganache.",
      image: strawberryLycheeFruitea,
      model: "models/lychee.glb",
    },
    {
      name: "TMC Milk Tea",
      sizes: ["Regular", "Large", "1 Liter"],
      price: { Regular: "85.00", Large: "100", "1 Liter": "110" },
      description:
        "Decadent chocolate cake topped with rich chocolate ganache.",
      image: tmcMilktea,
      model: "models/tmc milktea.glb",
    },
  ],
  "pasta & sandwiches": [
    {
      name: "Carbonara",
      price: "120.00",
      description:
        "Delicious mango-flavored cake topped with fresh mango slices.",
      image: carbonara,
      model: "models/pasta.glb",
    },
    {
      name: "Fish & Chips",
      price: "120.00",
      description:
        "Rich and moist chocolate cake with a creamy chocolate frosting.",
      image: fishNChips,
      model: "models/FISH AND CHIP.glb",
    },
    {
      name: "Knights of the Table",
      price: "120.00",
      description:
        "Rich and moist chocolate cake with a creamy chocolate frosting.",
      image: knigthsOfTheTable,
      model: "models/KNIGHTS OF THE TABLE.glb",
    },
    {
      name: "Lasagna",
      price: "120.00",
      description:
        "Rich and moist chocolate cake with a creamy chocolate frosting.",
      image: lasagna,
      model: "models/LASAGNA.glb",
    },
    {
      name: "Nuggets and Fries",
      price: "120.00",
      description:
        "Rich and moist chocolate cake with a creamy chocolate frosting.",
      image: NuggetsNFries,
      model: "models/NUGGETS AND FRIES.glb",
    },
    {
      name: "Tuna Pesto",
      price: "120.00",
      description:
        "Rich and moist chocolate cake with a creamy chocolate frosting.",
      image: TunaPesto,
      model: "models/TUNA.glb",
    },
  ],
};
