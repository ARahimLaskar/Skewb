import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Index } from "./components/Index";

export const items = [
  {
    name: "Prada",
    category: "Bags",
  },
  {
    name: "Gucci",
    category: "Bags",
  },
  {
    name: "Guess",
    category: "Bags",
  },
  {
    name: "Rolex",
    category: "Watches",
  },
  {
    name: "Timex",
    category: "Watches",
  },
  {
    name: "Nike",
    category: "Sports",
  },
  {
    name: "Adidas",
    category: "Sports",
  },
  {
    name: "Fila",
    category: "Sports",
  },
  {
    name: "Ray Ban",
    category: "Sunglasses",
  },
];
function App() {
  return (
    <>
      <Index />
    </>
  );
}

export default App;
