import React from 'react';
import styled from 'styled-components';

const LabelComponent = styled.label`
    font-size: var(--sm);
    font-weight: bold;
    margin-bottom: 4px;
`;

const Label = ({ children, htmlFor }) => {
    return <LabelComponent htmlFor={htmlFor}>{children}</LabelComponent>;
};

export { Label };
