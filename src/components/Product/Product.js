import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import addCard from '@icons/bt_add_to_cart.svg';
import AppContext from '../../context/AppContext';

const ProductComponent = styled.div`
    width: 240px;
    img {
        width: 240px;
        height: 240px;
        border-radius: 20px;
        object-fit: cover;
    }
    @media (max-width: 640px) {
        width: 140px;
        img {
            width: 140px;
            height: 140px;
        }
    }
`;
const ProductInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
    figure {
        margin: 0;
        cursor: pointer;
    }
    img {
        width: 35px;
        height: 35px;
    }
    .Price {
        font-weight: bold;
        font-size: var(--md);
        margin-top: 0;
        margin-bottom: 4px;
    }
    .ProductName {
        font-size: var(--sm);
        margin-top: 0;
        margin-bottom: 0;
        color: #757575;
    }
`;

const Product = ({ product }) => {
    const { addToCart } = useContext(AppContext);

    const handleClick = (item) => {
        addToCart(item);
    };
    return (
        <ProductComponent>
            <img loading="lazy" src={product.images[0]} alt={product.title} />
            <ProductInfo>
                <div>
                    <p className="Price">${product.price}</p>
                    <p className="ProductName">{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <img src={addCard} alt="add product image" />
                </figure>
            </ProductInfo>
        </ProductComponent>
    );
};

export { Product };
