// CartItem.js
import React from 'react';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './CartItem.css'; // Importa el archivo de estilos

const CartItem = ({item}) => {
    const { removeItem } = useContext(CartContext);
    return (
        <div className="cart-item">
            <div className='checkout-wrapper'>
                <h2>{item.name}</h2>
                <p>Cantidad: {item.quantity}</p>
                <p>Subtotal: {item.price * item.quantity}</p>
            </div>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
            <p className='description'>{item.description}</p>
            <img src={item.img} alt={item.name} />
        </div>
    );
}

export default CartItem;






























// import { CartContext } from "../../context/CartContext";
// import React from "react";
// import {useContext} from 'react';


// const CartItem = ({products}) => {
//     const { removeItem } = useContext(CartContext)

//     return(
//         <div className="container">
//             <picture>
//                 <img src={products.img} alt={products.name} className="imgContainer"/>
//             </picture>
//             <div className="productsCategorie">
//                 <h2>
//                     {products.name}
//                 </h2>
//                 <p>
//                     Cantidad: {products.quantity}
//                 </p>
//                 <p>
//                     Subtotal: {products.quantity * products.price}
//                 </p>
//                 <button onClick={()=> removeItem(products.id)}>Eliminar</button>
//             </div>
//         </div>    
//     )



// }

// export default CartItem



