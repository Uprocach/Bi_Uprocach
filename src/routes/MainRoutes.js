import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';

const DashboardDefault = Loadable(lazy(() => import('../views/Dashboard')));

const SamplePage = Loadable(lazy(() => import('../views/SamplePage')));

// Rutas para indicadores estructura B11 creados en la carpeta views/...

const IndicadorB1 = Loadable(lazy(() => import('../views/B11/Ind1')));

const IndicadorB2 = Loadable(lazy(() => import('../views/B11/Ind2')));

//Rutas para indicadores estructura C01 creados en la carpeta views/...

const IndicadorC1_01 = Loadable(lazy(() => import('../views/C01/Ind1')));

const IndicadorC1_02 = Loadable(lazy(() => import('../views/C01/Ind2')));

//Rutas para indicadores estructura C02 creados en la carpeta views/...

const IndicadorC2_01 = Loadable(lazy(() => import('../views/C02/Ind1')));

const IndicadorC2_02 = Loadable(lazy(() => import('../views/C02/Ind2')));

// Rutas para indicadores estructura D01 creados en la carpeta views/...

const IndicadorD1 = Loadable(lazy(() => import('../views/D01/Ind1')));

const IndicadorD2 = Loadable(lazy(() => import('../views/D01/Ind2')));

// Rutas para indicadores estructura L01 creados en la carpeta views/...

const IndicadorL1 = Loadable(lazy(() => import('../views/L01/Ind1')));

const IndicadorL2 = Loadable(lazy(() => import('../views/L01/Ind2')));

// Rutas para indicadores estructura S01 creados en la carpeta views/...

const IndicadorS1 = Loadable(lazy(() => import('../views/S01/Ind1')));

const IndicadorS2 = Loadable(lazy(() => import('../views/S01/Ind2')));
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
      path: '/C01-1/Ind1',
      element: <IndicadorC1_01 />
    },
    {
      path: '/C01-2/Ind2',
      element: <IndicadorC1_02 />
    },
    {
      path: '/C02-1/Ind1',
      element: <IndicadorC2_01 />
    },
    {
      path: '/C02-2/Ind2',
      element: <IndicadorC2_02 />
    },
    {
      path: '/D01/Ind1',
      element: <IndicadorD1 />
    },
    {
      path: '/D01/Ind2',
      element: <IndicadorD2 />
    },
    {
      path: '/L01/Ind1',
      element: <IndicadorL1 />
    },
    {
      path: '/L01/Ind2',
      element: <IndicadorL2 />
    },
    {
      path: '/S01/Ind1',
      element: <IndicadorS1 />
    },
    {
      path: '/S01/Ind2',
      element: <IndicadorS2 />
    }
  ]
};

export default MainRoutes;
