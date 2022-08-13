import CartContext from "./cart-context";


const CartProvider = props => {
    const addItemToCArtHandler = item => {}

    const removeItemFromCartHandler = id => {}

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCArtHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;