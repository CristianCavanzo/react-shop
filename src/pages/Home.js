import React, { useEffect, useState } from 'react';
import { Header } from '@components/Header';
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
import { Product } from '@components/Product/Product';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(async () => {
        const { data: response } = await axios(API);
        setProducts(response);
    }, []);
    return (
        <React.Fragment>
            <Header />
            <Products>
                {products.map((product, key) => (
                    <Product
                        key={key}
                        price={product.price}
                        image={product.images[0]}
                        productName={product.title}
                    />
                ))}
            </Products>
        </React.Fragment>
    );
};

export { Home };
