import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage";
import CakesDesserts from "./pages/menu/Cakes&Desserts";
import CoffeeGlaciers from "./pages/menu/Coffee&Glaciers";
import MilkteaFruittea from "./pages/menu/Milktea&Fruittea";
import PastaSanwiches from "./pages/menu/Pasta&Sandwiches";
import BasketPage from "./pages/BasketPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import OrderDetailPage from "./pages/OrderDetailPage";

export const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/cakes&desserts", element: <CakesDesserts /> },
  { path: "/coffee&glaciers", element: <CoffeeGlaciers /> },
  { path: "/milktea&fruittea", element: <MilkteaFruittea /> },
  { path: "/pasta&sandwiches", element: <PastaSanwiches /> },
  { path: "/basket", element: <BasketPage /> },
  { path: "/item-detail", element: <ItemDetailPage /> },
  { path: "/order-detail", element: <OrderDetailPage /> },
]);
