import { useState } from 'react';

const initialState = {
    cart: [],
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const addToCart = (product) => {
        setState({ ...state, cart: [...state.cart, product] });
    };

    console.log(state);
    const removeFromCart = (index) => {
        console.log(index);
        setState({
            ...state,
            cart: state.cart.filter((items, indexItem) => index !== indexItem),
        });
    };

    return { state, addToCart, removeFromCart };
};

export default useInitialState;
