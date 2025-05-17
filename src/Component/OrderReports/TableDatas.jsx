export default function TableDatas({ data, onDeliver, onDelete }) {
  const { uid, id, name, items, amount, status } = data;

  const handleDeliver = () => {
    if (status !== "Delivered") {
      onDeliver(uid); // parent will flip status to "Delivered"
    }
  };

  return (
    <tr className="border-t border-gray-700">
      <td className="py-3">{id}</td>
      <td className="py-3">{name}</td>
      <td className="py-3">{items}</td>
      <td className="py-3">{amount}</td>

      <td className="py-3">
        {status === "Delivered" ? (
          <span className="text-green-500">Delivered</span>
        ) : (
          <span className="text-red-500">{status}</span>
        )}
      </td>

      <td className="py-3">
        <button
          onClick={() => onDelete(uid)}
          className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
        >
          Delete
        </button>

        {status !== "Delivered" && (
          <button
            onClick={handleDeliver}
            className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
          >
            DELIVER
          </button>
        )}
      </td>
    </tr>
  );
}
