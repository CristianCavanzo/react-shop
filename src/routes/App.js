import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import { Forgot } from '../pages/Forgot';
import { RecoveryPassword } from '../pages/RecoveryPassword';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Login } from '../pages/Login';
import MyAccountPage from '../pages/MyAccount';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/forgot" element={<Forgot />} />
                    <Route
                        exact
                        path="/myAccount"
                        element={<MyAccountPage />}
                    />
                    <Route
                        exact
                        path="/recovery"
                        element={<RecoveryPassword />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
