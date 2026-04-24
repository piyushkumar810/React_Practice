import CartItem from "./CartItem";

function Cart({ items }) {
  return (
    <div>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Cart;