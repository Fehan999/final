import Nav from "./Component/Nav/Nav.jsx";
import Order from "./Component/Order.jsx";

function App() {
  return (
    <div className="container mx-auto px-4 h-screen flex flex-col">
      {/* Nav Section  */}
      <Nav />
      {/* Order Section  */}
      <Order />
    </div>
  );
}
export default App;
