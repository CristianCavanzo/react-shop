import React from 'react';
import { Input } from '../components/Input';
import { TitleComponent } from '../components/Title';
import { Label } from '../components/Label';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import {
    LoginComponent,
    FormContainer,
    Logo,
    Form,
} from '../components/login/LoginComponent';
import styled from 'styled-components';

const TitleLeft = styled(TitleComponent)`
    justify-self: flex-start;
    text-align: left;
`;

const MyAccount = ({ isEditing, children }) => {
    return (
        <LoginComponent>
            <FormContainer>
                <Logo src="./logos/logo_yard_sale.svg" alt="logo" />

                <TitleLeft className="title">My account</TitleLeft>

                <Form action="/">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        type="text"
                        id="name"
                        placeholder="Camila Yokoo"
                        disabled={!isEditing}
                    />

                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        type="email"
                        id="email"
                        placeholder="camiladsa@platzi.com"
                        disabled={!isEditing}
                    />

                    <Label htmlFor="password">Password</Label>
                    <Input
                        type="password"
                        id="password"
                        placeholder="*******"
                        disabled={!isEditing}
                    />

                    <PrimaryButton
                        isInput={true}
                        background="#fff"
                        color="var(--hospital-green)"
                        border="2px solid var(--hospital-green)"
                    >
                        {children}
                    </PrimaryButton>
                </Form>
            </FormContainer>
        </LoginComponent>
    );
};

export { MyAccount };
