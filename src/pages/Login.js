import React from 'react';
import { Input } from '../components/Input';
import { SubTitle } from '../components/SubTitle';
import { Title } from '../components/Title';
import { Label } from '../components/Label';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import {
    LoginComponent,
    FormContainer,
    Logo,
    Form,
} from '../components/login/LoginComponent';
import styled from 'styled-components';

const Resend = styled.p`
    font-size: var(--sm);
    span {
        color: var(--very-light-pink);
    }
    a {
        color: var(--hospital-green);
        text-decoration: none;
    }
`;

const Login = () => {
    return (
        <LoginComponent>
            <FormContainer>
                <Logo src="./logos/logo_yard_sale.svg" alt="logo" />

                <Title className="title">Create a new password</Title>
                <SubTitle className="subtitle">
                    Enter a new passwrd for yue account
                </SubTitle>

                <Form action="/">
                    <Label htmlFor="password" className="label">
                        Email address
                    </Label>
                    <Input
                        type="email"
                        id="email"
                        placeholder="platzi@example.cm"
                    />

                    <Label htmlFor="new-password" className="label">
                        Password
                    </Label>
                    <Input
                        type="password"
                        id="new-password"
                        placeholder="*********"
                    />
                    <Resend>
                        <a href="/">Forgot my password</a>
                    </Resend>

                    <PrimaryButton isInput={true}>Sign up</PrimaryButton>
                </Form>
            </FormContainer>
        </LoginComponent>
    );
};

export { Login };
