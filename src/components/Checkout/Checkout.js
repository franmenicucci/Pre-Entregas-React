import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebase/firebaseConfig";
import "./Checkout.css";

import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  useEffect(() => {
  }, [orderId]);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: parseFloat(getTotalPrice()),
        date: Timestamp.fromDate(new Date()),
      };

      const orderRef = collection(db, "orders");
      const orderAdded = await addDoc(orderRef, objOrder);
      setOrderId(orderAdded.id);
      clearCart();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="wrapper">
        <h1>Se esta generando la orden...</h1>
      </div>
    );
  }

  if (orderId) {
    return (
      <div className="wrapper">
        <h1>El Id de su orden es: {orderId}</h1>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <h1>CHECKOUT</h1>
      <br />
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
