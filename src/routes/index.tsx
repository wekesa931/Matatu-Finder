import React from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from '@/pages/layout';
import Main from '@/pages/main';
import NotFound from '@/pages/NotFound';
import Routes from '@/pages/myRoutes/routes';

export default [
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Main /> }],
  },
  {
    path: '/routes/:id',
    element: <Layout />,
    children: [{ index: true, element: <Routes /> }],
  },
  {
    path: '/*',
    element: <NotFound />,
  },
] as RouteObject[];
