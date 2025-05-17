import { useEffect, useMemo, useState } from "react";
import Report from "../GlobalComponents/Report.jsx";
import TableDatas from "./TableDatas.jsx";

export default function OrderReports({ datas }) {
  //All States
  const [allOrders, setAllOrders] = useState(datas);
  const [filter, setFilter] = useState("All");

  useEffect(() => setAllOrders(datas), [datas]);

  const deliveredCount = useMemo(
    () => allOrders.filter((o) => o.status === "Delivered").length,
    [allOrders]
  );
  const pendingCount = allOrders.length - deliveredCount;

  const dataTable = useMemo(() => {
    if (filter === "All") return allOrders;
    return allOrders.filter((o) => o.status === filter);
  }, [filter, allOrders]);

  const handleDelete = (rowKey) =>
    setAllOrders((prev) => prev.filter((row) => row.key !== rowKey));

  const handleFilterChange = (e) => setFilter(e.target.value);

  const markDelivered = (rowKey) =>
    setAllOrders((prev) =>
      prev.map((r) => (r.key === rowKey ? { ...r, status: "Delivered" } : r))
    );

  const rows = dataTable.map((order, idx) => (
    <TableDatas
      key={order.key}
      data={{
        uid: order.key,
        id: idx + 1,
        name: order.customerName,
        items: order.items,
        amount: order.amount,
        status: order.status,
      }}
      onDeliver={() => markDelivered(order.key)}
      onDelete={handleDelete}
    />
  ));

  return (
    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
      <Summary
        all={allOrders.length}
        pending={pendingCount}
        delivered={deliveredCount}
      />
      {/* Table */}
      <div>
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Order Reports</h2>
          <div className="flex gap-4 items-center">
            <Report />
            <select
              value={filter}
              onChange={handleFilterChange}
              className="appearance-none bg-zinc-900 border-none outline-none rounded-sm"
            >
              <option>All</option>
              <option>Pending</option>
              <option>Delivered</option>
            </select>
          </div>
        </div>

        <div className="bg-cardbg rounded-lg p-4">
          <table className="min-w-full">
            <TableHead />
            <tbody className="text-sm">{rows}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

//Cards
function Summary({ all, pending, delivered }) {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card color="yellow" label="Total Order" value={all} />
        <Card color="red" label="Pending" value={pending} />
        <Card color="green" label="Delivered" value={delivered} />
      </div>
    </>
  );
}

function Card({ color, label, value }) {
  return (
    <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
      <div className={`text-5xl font-bold text-${color}-500 mb-2`}>{value}</div>
      <div
        className={`bg-${color}-800 bg-opacity-50 text-${color}-200 text-xs font-medium px-3 py-1 rounded-full inline-block`}
      >
        {label}
      </div>
    </div>
  );
}

function TableHead() {
  return (
    <thead>
      <tr className="text-left text-sm">
        <th className="pb-3 font-medium">ID</th>
        <th className="pb-3 font-medium">Customer Name</th>
        <th className="pb-3 font-medium">Items</th>
        <th className="pb-3 font-medium">Amount</th>
        <th className="pb-3 font-medium">Status</th>
        <th className="pb-3 font-medium">Action</th>
      </tr>
    </thead>
  );
}
