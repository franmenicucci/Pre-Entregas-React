import {useContext} from "react"
import {CartContext} from '../../context/CartContext'
import CartItem from "../CartItem/CartItem"
import {Link} from 'react-router-dom'
import './Cart.css';


const Cart = () => {
    const { cart, clearCart, totalQuantity, getTotalPrice } = useContext(CartContext)

    if (totalQuantity === 0 || !cart || cart.length === 0) { // Agrega una verificación para cart
        return (
            <div className="cart-empty">
                <h1>Su Carrito está vacío</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div className="cart-container">
        {cart.map(item => (
            <CartItem item={item} />
        ))}
            <h3>Total: ${getTotalPrice()}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar el carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart;