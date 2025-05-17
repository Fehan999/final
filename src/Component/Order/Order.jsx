import { use, useState } from "react";
import Items from "./Items.jsx";
import OrderSectionContent from "./OrderSectionContent.jsx";
export default function OrderSection({ buttonOnClick }) {
  const [input, useInput] = useState("");
  const [price, usePrice] = useState(0);
  const [items, useItems] = useState(0);
  const handleChange = (e) => {
    useInput(e.target.value);
  };

  const handleChildData = (data, items) => {
    usePrice(data);
    useItems(items);
  };
  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <OrderSectionContent />
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          onChange={handleChange}
          type="text"
          className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
      </div>
      {/* ItemSection  */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container">
          <Items onDataSend={handleChildData} />
        </div>
      </div>
      {/* OrderSubmit Section  */}
      <button
        onClick={() => buttonOnClick(input, price, items)}
        className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
      >
        Place Order {price}
      </button>
    </div>
  );
}
