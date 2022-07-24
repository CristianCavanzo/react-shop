import React from 'react';
import styled from 'styled-components';
const Products = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 240px);
    gap: 26px;
    place-content: center;
    margin: 3em 0 0 0;
    @media (max-width: 640px) {
        grid-template-columns: repeat(auto-fill, 140px);
    }
`;

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
        color: var(--very-light-pink);
    }
`;

const Product = ({ price, productName, image }) => {
    return (
        <ProductComponent>
            <img src={image} alt="" />
            <ProductInfo>
                <div>
                    <p className="Price">${price}</p>
                    <p className="ProductName">{productName}</p>
                </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="" />
                </figure>
            </ProductInfo>
        </ProductComponent>
    );
};

export { Product };
