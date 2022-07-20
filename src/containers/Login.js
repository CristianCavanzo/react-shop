import React from 'react';
import styled from 'styled-components';
import { Input } from '../components/generals/Input';
import { SubTitle } from '../components/generals/SubTitle';
import { Title } from '../components/generals/Title';
import { Label } from '../components/generals/Label';
import { PrimaryButton } from '../components/generals/buttons/PrimaryButton';

const LoginComponent = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
`;
const FormContainer = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    width: 300px;
`;

const Logo = styled.img`
    width: 150px;
    margin-bottom: 48px;
    justify-self: center;
    display: none;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
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
                        Password
                    </Label>
                    <Input
                        type="password"
                        id="password"
                        placeholder="*********"
                    />

                    <Label htmlFor="new-password" className="label">
                        Password
                    </Label>
                    <Input
                        type="password"
                        id="new-password"
                        placeholder="*********"
                    />

                    <PrimaryButton isInput={true}>Confirm</PrimaryButton>
                </Form>
            </FormContainer>
        </LoginComponent>
    );
};

export { Login };
