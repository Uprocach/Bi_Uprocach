import React from 'react';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project imports
import Loadable from 'component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

const AuthLogin = Loadable(lazy(() => import('../views/Login')));

// ==============================|| AUTH ROUTE ||============================== //
const authenticated = localStorage.getItem('authenticated');

// ==============================|| AUTHENTICATION ROUTES ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/',
      element: !authenticated ? <AuthLogin /> : <Navigate to="/app/dashboard" />
    }
  ]
};

export default AuthenticationRoutes;
