import React from 'react';
import { ViteReactSSG } from 'vite-react-ssg';
import { HelmetProvider } from 'react-helmet-async';
import { routes } from './routes';

export const createRoot = ViteReactSSG(
  {
    routes,
    basename: '/',
  },
  ({ router }) => {
    // If you need to do something with the router before rendering
  }
);
