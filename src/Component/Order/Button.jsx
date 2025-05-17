import Minus from "../GlobalComponents/Minus";
import Plus from "../GlobalComponents/Plus";
export default function Button({ actionButton }) {
  return (
    <button className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
      {actionButton ? <Plus /> : <Minus />}
    </button>
  );
}
