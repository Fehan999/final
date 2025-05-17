import { useState } from "react";
import Chiken from "../../assets/chicken.svg";
import Hamburger from "../../assets/hamburger.svg";
import Pizza from "../../assets/pizza.svg";
import Submarine from "../../assets/submarine.svg";
import Item from "./Item.jsx";
export default function Items({ onDataSend, priceData }) {
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);

  const handleChange = (element, truthly) => {
    truthly ? setPrice(price + element) : setPrice(price - element);
    if (truthly) {
      setCount((prevCount) => prevCount + 1);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const priceList = {
    hamburger: 300,
    pizza: 200,
    chiken: 600,
    sandwitch: 100,
  };
  return (
    <>
      {/* priceData(price); */}
      <Item
        onClick={onDataSend(price, count)}
        priceLists={handleChange}
        data={{
          name: "Hamburger",
          src: Hamburger,
          price: priceList.hamburger,
        }}
      />
      <Item
        onClick={onDataSend(price, count)}
        priceLists={handleChange}
        data={{
          name: "Pizza slices",
          src: Pizza,
          price: priceList.pizza,
        }}
      />
      <Item
        onClick={onDataSend(price, count)}
        priceLists={handleChange}
        data={{
          name: "Chicken Nuggets",
          src: Chiken,
          price: priceList.chiken,
        }}
      />
      <Item
        onClick={onDataSend(price, count)}
        priceLists={handleChange}
        data={{
          name: "Submarine Sandwich",
          src: Submarine,
          price: priceList.sandwitch,
        }}
      />
    </>
  );
}
