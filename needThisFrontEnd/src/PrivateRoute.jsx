import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, auth }) => {
    return auth.user ? <Component /> : <Navigate to="/auth" />;
};

export default PrivateRoute;
