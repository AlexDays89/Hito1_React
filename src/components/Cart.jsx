import { pizzaCart } from "../utils/pizzas";

const Cart = () => {
    return (
        <div>
        <h1>Detalles del pedido</h1>
        <ul>
            {pizzaCart.map((pizza) => (
            <li key={pizza.id}>
                <img src={pizza.img} alt={pizza.name} />
                <h2>{pizza.name}</h2>
                <p>Precio: ${pizza.price}</p>
                <p>Cantidad: {pizza.count}</p>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default Cart;