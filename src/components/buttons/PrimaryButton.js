import React from 'react';
import styled from 'styled-components';
const PrimaryButtonComponent = styled.button`
    background-color: ${(props) => props.background || 'var(--hospital-green)'};
    border-radius: 8px;
    border: ${(props) => props.border || 'none'};
    color: ${(props) => props.color || 'var(--white)'};
    width: 100%;
    cursor: pointer;
    font-size: var(--md);
    font-weight: bold;
    height: 50px;
    text-align: center;
`;

const PrimaryButton = ({ children, isInput, background, color, border }) => {
    if (isInput) {
        return (
            <PrimaryButtonComponent
                as="input"
                value={children}
                type="submit"
                background={background}
                color={color}
                border={border}
            ></PrimaryButtonComponent>
        );
    } else {
        return (
            <PrimaryButtonComponent
                background={background}
                color={color}
                border={border}
            >
                {children}
            </PrimaryButtonComponent>
        );
    }
};

export { PrimaryButton };
