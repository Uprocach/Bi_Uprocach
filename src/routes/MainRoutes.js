import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';

const DashboardDefault = Loadable(lazy(() => import('../views/Dashboard')));

const SamplePage = Loadable(lazy(() => import('../views/SamplePage')));

// Rutas para indicadores estructura B11 creados en la carpeta views/...

const IndicadorB1 = Loadable(lazy(() => import('../views/B11/Ind1')));

const IndicadorB2 = Loadable(lazy(() => import('../views/B11/Ind2')));

// Rutas para indicadores estructura D01 creados en la carpeta views/...

const IndicadorD1 = Loadable(lazy(() => import('../views/D01/Ind1')));

const IndicadorD2 = Loadable(lazy(() => import('../views/D01/Ind2')));

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/dashboard/default',
      element: <DashboardDefault />
    },
    { path: '/sample-page', element: <SamplePage /> },
    {
      path: '/B11/Ind1',
      element: <IndicadorB1 />
    },
    {
      path: '/B11/Ind2',
      element: <IndicadorB2 />
    },
    {
      path: '/D11/Ind1',
      element: <IndicadorD1 />
    },
    {
      path: '/D11/Ind2',
      element: <IndicadorD2 />
    }
  ]
};

export default MainRoutes;
