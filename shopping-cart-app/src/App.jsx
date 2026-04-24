import Cart from "./Cart";

function App() {
  const cartItems = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
  ];

  return (
    <div>
      <h1>Shopping Cart</h1>
      <Cart items={cartItems} />
    </div>
  );
}

export default App;