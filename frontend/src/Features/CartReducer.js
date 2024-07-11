// The reduce method is used to iterate over the cart array.
// The initial value of sum is set to 0.
export const totalItem = (cart) => {
    return cart.reduce((sum, product) => sum + product.quantity, 0);
}

export const totalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.quantity * product.price, 0);
}

const CartReducer = (state, action) => {
    switch (action.type) {
        case "Add":
            // Check if the product already exists in the cart
            const existingProduct = state.find(p => p._id === action.product._id);
            if (existingProduct) {
                return state; // If it exists, return the current state
            }
            return [...state, { ...action.product, quantity: 1 }]; // If not, add the product with initial quantity

        case "Remove":
            return state.filter(p => p._id !== action._id);

        case "Increase":
            return state.map(p =>
                p._id === action._id ? { ...p, quantity: p.quantity + 1 } : p
            );

        case "Decrease":
            return state.map(p =>
                p._id === action._id ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p
            );

        default:
            return state;
    }
}

export default CartReducer;
