import { useState } from "react";

function OrderForm() {

  // State management

  const [product, setProduct] =
    useState("");

  const [quantity, setQuantity] =
    useState(1);

  const [invoice, setInvoice] =
    useState(null);

  // Order creation

  const placeOrder = async () => {
  try {

    const response = await fetch(
      "http://localhost:5000/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          product,
          quantity: Number(quantity)
        })
      }
    );

   const order = await response.json();

    if (!response.ok) {
      alert(order.message);
      return;
    }

    const invoiceResponse = await fetch(
      `http://localhost:5000/invoice/${order._id}`
    );

    const invoiceData =
      await invoiceResponse.json();

    setInvoice(invoiceData);

  } catch (error) {
    console.error(error);
    alert("Backend connection failed");
  }
};
  return (
    <div
      style={{
        padding: "20px"
      }}
    >
      <h2>
        Product Ordering System
      </h2>

      <input
        type="text"
        placeholder="Product Name"
        value={product}
        onChange={(e) =>
          setProduct(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <input
        type="number"
        value={quantity}
        onChange={(e) =>
          setQuantity(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <button
        onClick={placeOrder}
      >
        Place Order
      </button>

      {/* Invoice display */}

      {invoice && (
        <div>
          <h3>Invoice</h3>

          <p>
            Invoice No :
            {invoice.invoiceNo}
          </p>

          <p>
            Product :
            {invoice.product}
          </p>

          <p>
            Quantity :
            {invoice.quantity}
          </p>

          <p>
            Total :
            ₹{invoice.total}
          </p>
        </div>
      )}
    </div>
  );
}

export default OrderForm;