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
      price: "949.00",
      description:
        "A rich, decadent chocolate cake layered with luscious whipped cream, tart cherries, and finished with a drizzle of cherry liqueur and dark chocolate shavings.",
      image: blackForest,
      model: "/models/Black Forest.glb",
    },
    {
      name: "Chocolate Cake",
      price: "799.00",
      description:
        "A classic, indulgent chocolate cake with a rich, velvety texture that melts in your mouth.",
      image: chocolateCake,
      model: "/models/Chocolate Cake.glb",
    },
    {
      name: "Fried Ice Cream",
      price: "149.00",
      description:
        "A crispy, golden shell encasing creamy ice cream, creating a delightful contrast of warm and cold in every bite.",
      image: friedIceCream,
      model: "/models/Fried Ice Cream.glb",
    },
    {
      name: "Lamington",
      price: "90.00",
      description:
        "Soft sponge cake squares coated in chocolate and rolled in coconut flakes, a true treat from Down Under.",
      image: lamington,
      model: "/models/Lamington.glb",
    },
    {
      name: "Mango Cake",
      price: "889.00",
      description:
        "A light, fruity cake layered with fresh mango flavor, perfect for a tropical taste.",
      image: mangoCake,
      model: "/models/NEW MANGO CAKE.glb",
    },
    {
      name: "Mango Cheese Cake",
      price: "659.00",
      description:
        "Creamy cheesecake with a burst of mango, blending sweetness and tang in every slice.",
      image: mangoCheeseCake,
      model: "/models/cheesecake.glb",
    },
    {
      name: "Milktea Cake",
      price: "1299.00",
      description:
        "A fluffy cake infused with the signature flavor of milk tea, ideal for tea lovers.",
      image: milkteaCake,
      model: "/models/MILKTEA CAKE.glb",
    },
    {
      name: "Wicked Oreos",
      price: "149.00",
      description:
        "Crispy battered Oreos served warm, with a gooey chocolatey center that’s irresistibly wicked.",
      image: wickedOreos,
      model: "/models/NEW WICKED.glb",
    },
  ],
  "coffee & glaciers": [
    {
      name: "Cappuccino",
      price: "100.00",
      description:
        "A classic espresso with steamed milk and a layer of rich, velvety foam.",
      image: cappuccino,
      model: "models/Capuccino.glb",
    },
    {
      name: "Caramel Macchiato",
      price: "110.00",
      description:
        "Smooth espresso layered with steamed milk and drizzled with caramel for a sweet finish.",
      image: caramelMach,
      model: "models/Caramel Mach.glb",
    },
    {
      name: "Cookies and Cream Glaciers",
      price: "110.00",
      description:
        "A creamy, ice-blended treat with a delightful cookies-and-cream flavor in every sip.",
      image: cookiesNCreamGlaciers,
      model: "models/FRAPPE.glb",
    },
    {
      name: "Latte",
      price: "100.00",
      description:
        "Espresso mixed with steamed milk, offering a silky-smooth coffee experience.",
      image: latte,
      model: "models/Capuccino.glb",
    },
    {
      name: "Strawberry Glaciers",
      price: "110.00",
      description:
        "An ice-blended drink bursting with fresh strawberry flavor, perfect for a refreshing, fruity boost.",
      image: strawberryGlaciers,
      model: "models/Strawberry Glacier.glb",
    },
    {
      // price for this item is just placeholder - no price yet.
      name: "TMC Coffee",
      price: "100.00",
      description:
        "Our signature coffee blend, expertly crafted for a rich, bold, and unforgettable flavor.",
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
        "A unique milk tea blend with a smooth, earthy flavor and a hint of smokiness.",
      image: charcoal,
      model: "models/charcoal.glb",
    },
    {
      name: "Green Apple Fruit Tea",
      sizes: ["Regular", "Large", "1 Liter"],
      price: { Regular: "85.00", Large: "100", "1 Liter": "110" },
      description:
        "A refreshing tea infused with the crisp, tangy flavor of green apple.",
      image: greenAppleFruitTea,
      model: "models/GREEN TEA.glb",
    },
    {
      name: "Mango Fruit Tea",
      sizes: ["Regular", "Large", "1 Liter"],
      price: { Regular: "85.00", Large: "100", "1 Liter": "110" },
      description:
        "Tropical mango flavors in a vibrant and refreshing fruit tea.",
      image: mangoFruitTea,
      model: "models/MANGO.glb",
    },
    {
      name: "Matcha Mango",
      sizes: ["Regular", "Large", "1 Liter"],
      price: { Regular: "85.00", Large: "100", "1 Liter": "110" },
      description:
        "A fusion of rich matcha and sweet mango, perfect for a twist on the classic.",
      image: matchaMango,
      model: "models/MATCHA MANGO.glb",
    },
    {
      name: "Nutella Milktea",
      sizes: ["Regular", "Large", "1 Liter"],
      price: { Regular: "85.00", Large: "100", "1 Liter": "110" },
      description:
        "A creamy milk tea with the indulgent, chocolate-hazelnut taste of Nutella.",
      image: nutellaMilktea,
      model: "models/nutella milktea.glb",
    },
    {
      name: "Oreo Milk Tea",
      sizes: ["Regular", "Large", "1 Liter"],
      price: { Regular: "85.00", Large: "100", "1 Liter": "110" },
      description:
        "Milk tea mixed with Oreo crumbs for a delightful, cookies-and-cream flavor.",
      image: oreoMilktea,
      model: "models/OREO.glb",
    },
    {
      name: "Passion Fruit Tea",
      sizes: ["Regular", "Large", "1 Liter"],
      price: { Regular: "85.00", Large: "100", "1 Liter": "110" },
      description:
        "A bright, tropical tea with the tangy sweetness of passion fruit.",
      image: passionFruitea,
      model: "models/PASSION.glb",
    },
    {
      name: "Strawberry Lychee Fruit Tea",
      sizes: ["Regular", "Large", "1 Liter"],
      price: { Regular: "85.00", Large: "100", "1 Liter": "110" },
      description:
        "A fruity blend of sweet strawberry and floral lychee, perfect for a refreshing sip.",
      image: strawberryLycheeFruitea,
      model: "models/lychee.glb",
    },
    {
      name: "TMC Milk Tea",
      sizes: ["Regular", "Large", "1 Liter"],
      price: { Regular: "85.00", Large: "100", "1 Liter": "110" },
      description:
        "Our signature milk tea blend, crafted with a perfect balance of tea and creamy sweetness.",
      image: tmcMilktea,
      model: "models/tmc milktea.glb",
    },
  ],
  "pasta & sandwiches": [
    {
      name: "Carbonara",
      price: "129.00",
      description:
        "A creamy pasta tossed with rich sauce and savory toppings for a comforting classic.",
      image: carbonara,
      model: "models/pasta.glb",
    },
    {
      name: "Fish & Chips",
      price: "299.00",
      description:
        "Crispy, golden-battered fish served with a side of perfectly seasoned fries.",
      image: fishNChips,
      model: "models/FISH AND CHIP.glb",
    },
    {
      name: "Knights of the Table",
      price: "349.00",
      description:
        "A hearty sandwich stacked with premium meats, cheese, and fresh greens.",
      image: knigthsOfTheTable,
      model: "models/KNIGHTS OF THE TABLE.glb",
    },
    {
      name: "Lasagna",
      price: "199.00",
      description:
        "Layers of pasta, rich meat sauce, and melted cheese baked to perfection.",
      image: lasagna,
      model: "models/LASAGNA.glb",
    },
    {
      name: "Nuggets and Fries",
      price: "159.00",
      description:
        "Golden, crispy chicken nuggets paired with a side of crunchy fries.",
      image: NuggetsNFries,
      model: "models/NUGGETS AND FRIES.glb",
    },
    {
      name: "Tuna Pesto",
      price: "229.00",
      description:
        "Pasta mixed with a fresh, basil pesto and tender tuna for a light, flavorful dish.",
      image: TunaPesto,
      model: "models/pesto.glb",
    },
  ],
};
