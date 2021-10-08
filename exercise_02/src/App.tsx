import React from "react";
import "./App.css";
import Calculator from "./containers/Calculator";
import { TProduct } from "./type";

const products: TProduct[] = [
  { name: "milk", price: 3.97, sale: { quantity: 2, price: 5 } },
  { name: "bread", price: 2.17, sale: { quantity: 3, price: 6 } },
  { name: "banana", price: 0.99 },
  { name: "apple", price: 0.89 },
];

function App() {
  return (
    <div className="App">
      <Calculator products={products} />
    </div>
  );
}

export default App;
