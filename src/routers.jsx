import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage";
import MainCourse from "./pages/menu/MainCourse";
import Drinks from "./pages/menu/Drinks";
import Desserts from "./pages/menu/Desserts";
import Burgers from "./pages/menu/Burgers";
import Coffee from "./pages/menu/Coffee";
import Cakes from "./pages/menu/Cakes";
import BasketPage from "./pages/BasketPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import ARView from "./components/ARView"; // Import ARView from the correct path

export const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/main-course", element: <MainCourse /> },
  { path: "/drinks", element: <Drinks /> },
  { path: "/desserts", element: <Desserts /> },
  { path: "/cakes", element: <Cakes /> }, // Corrected to point to Cakes
  { path: "/burgers", element: <Burgers /> },
  { path: "/basket", element: <BasketPage /> },
  { path: "/item-detail", element: <ItemDetailPage /> },
  { path: "/order-detail", element: <OrderDetailPage /> },
  { path: "/ar-view", element: <ARView /> }, // Added ARView route
  { path: "/coffee", element: <Coffee /> },
]);
