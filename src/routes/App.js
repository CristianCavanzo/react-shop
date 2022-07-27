import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import { Forgot } from '@pages/Forgot';
import { RecoveryPassword } from '@pages/RecoveryPassword';
import { NotFound } from '@pages/NotFound';
import { Login } from '@pages/Login';
import { Register } from '@pages/Register';
import { EmailRecovery } from '@pages/EmailRecovery';
import { MyAccountPage } from '@pages/myAccount';
import { Orders } from '@pages/Orders';
import { Checkout } from '@pages/Checkout';
import { Home } from '@pages/Home';
import AppContext from '../context/AppContext';
import useInitialState from '@hooks/useInitialState';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter basename="/react-shop">
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/newPassword" element={<Forgot />} />
                        <Route exact path="/register" element={<Register />} />
                        <Route
                            exact
                            path="/recovery"
                            element={<RecoveryPassword />}
                        />
                        <Route
                            exact
                            path="/passwordRecovery"
                            element={<EmailRecovery />}
                        />
                        <Route
                            exact
                            path="/myAccount"
                            element={<MyAccountPage />}
                        />
                        <Route exact path="/orders" element={<Orders />} />
                        <Route exact path="/checkout" element={<Checkout />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;
