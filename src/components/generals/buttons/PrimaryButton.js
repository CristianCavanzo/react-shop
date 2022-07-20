import React from 'react';
import styled from 'styled-components';
const PrimaryButtonComponent = styled.button`
    background-color: var(--hospital-green);
    border-radius: 8px;
    border: none;
    color: var(--white);
    width: 100%;
    cursor: pointer;
    font-size: var(--md);
    font-weight: bold;
    height: 50px;
    text-align: center;
`;

const PrimaryButton = ({ children, isInput }) => {
    if (isInput) {
        return (
            <PrimaryButtonComponent
                as="input"
                value={children}
                type="submit"
            ></PrimaryButtonComponent>
        );
    }
};

export { PrimaryButton };
