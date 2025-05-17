import { useState } from "react";
import Button from "./Button.jsx";
export default function Item({ data, priceLists }) {
  const { name, src, price } = data;

  const [action, useAction] = useState(true);
  const handleChange = () => {
    action ? useAction(false) : useAction(true);
  };

  return (
    <div
      onClick={() => {
        priceLists(price, action);
        handleChange();
      }}
      className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300"
    >
      <div className="flex items-center">
        <div className="w-12 h-12   flex items-center justify-center mr-3">
          <img src={src} alt="Hamburger" className="w-10 h-10" />
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-xs text-gray-400">BDT {price}</p>
        </div>
      </div>
      <Button actionButton={action} />
    </div>
  );
}
