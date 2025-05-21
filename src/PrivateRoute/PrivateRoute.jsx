import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user } = use(AuthContext);

    if (!user) {
        return <Navigate state={location?.pathname} to={'/login'}></Navigate>
    }

    return children;
};

export default PrivateRoute;