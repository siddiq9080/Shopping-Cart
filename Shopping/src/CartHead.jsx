import React from "react";

import "./CartHead.css";

const data = [
  {
    head: "Shop in Style",
    sub: "With this shopping app",
  },
];

const Heads = ({ head, sub }) => {
  return (
    <div className="header">
      <h1 className="h1">{head}</h1>
      <h4 className="h4">{sub}</h4>
    </div>
  );
};

const CartHead = () => {
  return (
    <div className="header">
      {data.map((cart) => (
        <Heads key={cart.head} {...cart} />
      ))}
    </div>
  );
};

export default CartHead;
