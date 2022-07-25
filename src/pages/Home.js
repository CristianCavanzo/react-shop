import React from 'react';
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

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Products>
                <Product
                    price="100.000"
                    image="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    productName="bike"
                />
            </Products>
        </React.Fragment>
    );
};

export { Home };
