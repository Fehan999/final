import { useState } from "react";
import OrderSection from "./Order/Order.jsx";
import OrderReports from "./OrderReports/OrderReports.jsx";
export default function Order() {
  const handleDatas = (name, price, items) => {
    const newOrder = {
      key: crypto.randomUUID(),
      customerName: name,
      items: items,
      amount: price,
      status: "Pending",
    };

    setData((prevData) => [...prevData, newOrder]);
  };
  const DefaultUser = {
    key: crypto.randomUUID(),
    customerName: "Ehan Siddique",
    items: 3,
    amount: 500,
    status: "Pending",
  };

  const [data, setData] = useState([DefaultUser]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <OrderSection buttonOnClick={handleDatas} />
      {/* Order Table Section  */}

      <OrderReports datas={data} />
    </div>
  );
}
