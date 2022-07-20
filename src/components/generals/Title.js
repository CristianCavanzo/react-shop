import React from 'react';
import styled from 'styled-components';

const TitleComponent = styled.h1`
    font-size: var(--lg);
    margin-bottom: 12px;
    text-align: center;
`;

const Title = ({ children }) => {
    return <TitleComponent>{children}</TitleComponent>;
};

export { Title };
