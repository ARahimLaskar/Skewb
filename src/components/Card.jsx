import React from "react";
import "../App.css";
export const Card = ({ item }) => {
  return (
    <div className="card">
      <h4>{item.name}</h4>
      <p>{item.category}</p>
    </div>
  );
};
