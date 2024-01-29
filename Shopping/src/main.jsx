import React from "react";
import ReactDOM from "react-dom/client";
import CartHead from "./CartHead.jsx";
import Cart from "./Cart.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartHead />
    <Cart />
  </React.StrictMode>
);
