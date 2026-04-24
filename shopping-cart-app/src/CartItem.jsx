function CartItem({ item }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h3>{item.name}</h3>
      <p>Price: ₹{item.price}</p>
    </div>
  );
}

export default CartItem;