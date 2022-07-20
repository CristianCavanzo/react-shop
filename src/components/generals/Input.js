import React from 'react';
import styled from 'styled-components';

const InputComponent = styled.input.attrs(({ type }) => ({
    type: type || 'text',
}))`
    background-color: var(--text-input-field);
    border: none;
    border-radius: 8px;
    height: 30px;
    font-size: var(--md);
    padding: 6px;
    margin-bottom: 12px;
    outline: none;
`;

const Input = ({ placeholder, type }) => {
    return <InputComponent placeholder={placeholder} type={type} />;
};

export { Input };
