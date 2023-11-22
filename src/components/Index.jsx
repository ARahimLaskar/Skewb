import React, { useState } from "react";
import { items } from "../App";
import { Card } from "./Card";
import "../App.css";

export const Index = () => {
  const [filterData, setFilterData] = useState([]);

  const filterByCategory = (category) => {
    const filtered = items.filter((item) => item.category === category);
    setFilterData(filtered);
  };

  return (
    <div>
      <div className="nav">
        <button
          onClick={() => {
            filterByCategory("Bags");
          }}
        >
          Bags
        </button>
        <button
          onClick={() => {
            filterByCategory("Watches");
          }}
        >
          Watches
        </button>
        <button
          onClick={() => {
            filterByCategory("Sports");
          }}
        >
          Sports
        </button>
        <button
          onClick={() => {
            filterByCategory("Sunglasses");
          }}
        >
          Sunglasses
        </button>
      </div>
      <div className="items_container">
        {filterData.map((e, i) => {
          return <Card key={i} item={e} />;
        })}
      </div>
    </div>
  );
};
