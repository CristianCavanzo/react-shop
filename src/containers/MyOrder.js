import React, { useContext } from 'react';
import '@styles/MyOrder.css';
import { PrimaryButton } from '@components/buttons/PrimaryButton';
import AppContext from '../context/AppContext';
import close from '@icons/icon_close.png';

const MyOrder = () => {
    const {
        state: { cart },
        removeFromCart,
    } = useContext(AppContext);
    const sumTotal = () => {
        const reducer = (accumulator, currentValue) =>
            accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    };
    const onRemove = (index) => {
        removeFromCart(index);
    };
    return (
        <aside className="my-order">
            <div className="my-order-container">
                <h1 className="title">My order</h1>

                <div className="my-order-content">
                    <div className="order">
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>${sumTotal()}</p>
                    </div>

                    <div className="all_orders">
                        {cart.map((order, key) => (
                            <div
                                className="shopping-cart"
                                key={`${key}_${order.title}`}
                            >
                                <figure>
                                    <img
                                        src={order.images[0]}
                                        alt={order.title}
                                    />
                                </figure>
                                <p>{order.title}</p>
                                <p>${order.price}</p>
                                <img
                                    src={close}
                                    alt="close"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => onRemove(key)}
                                />
                            </div>
                        ))}
                    </div>
                    <PrimaryButton>Checkout</PrimaryButton>
                </div>
            </div>
        </aside>
    );
};

export { MyOrder };
