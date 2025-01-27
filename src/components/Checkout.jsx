import { useState, useContext } from 'react';
import { CartContext } from './Context.jsx';
import { collection, documentId, getDocs, query, Timestamp, where, writeBatch, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig.js';
import CheckoutForm from './CheckoutForm.jsx';

function Checkout() {
  const [ loading, setLoading ] = useState(false);
  const [ orderId, setOrderId ] = useState("");
  const { cart, total, clearCart } = useContext(CartContext);

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
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

     const batch = writeBatch(db);
     const outOfStock = [];
     const ids = cart.map((produdct) => produdct.id);
     const productsRef = collection(db, "items");
     const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)));
     const { docs } = productsAddedFromFirestore;

     docs.forEach((doc) => {
       const dataDoc = doc.data();
       const stockDb = dataDoc.stock;
       const producsAddedToCart = cart.find((product) => product.id === doc.id);
       const prodQuantity = producsAddedToCart?.quantity;
       if (stockDb >= prodQuantity) {
         batch.update(doc.ref, { stock: stockDb - prodQuantity });
       } else {
         outOfStock.push({ id: doc.id, ...dataDoc });
       }
     });

     if (outOfStock.length === 0) {
       await batch.commit();
       const orderRef = collection(db, "orders");
       const orderAdded = await addDoc(orderRef, objOrder);
       setOrderId(orderAdded.id);
       clearCart();
     } else {
       console.error("Hay productos sin stock", outOfStock);
     }
    } catch (error) {
       console.log("Error al crear la orden: ", error);
    } finally {
       setLoading(false);
    }
  };

  if (loading) {
    return <h1 className="title has-text-centered my-6">Se esta creando su orden...</h1>;
  }

  if (orderId) {
    return <h1 className="title has-text-centered my-6">El id de su orden es: {orderId}</h1>;
  }

  return (
    <div className="container">
      <h1 className="title has-text-centered">Checkout</h1>
      <div className="box">
        <CheckoutForm onConfirm={createOrder} />
      </div>
    </div>
  );
}

export default Checkout;