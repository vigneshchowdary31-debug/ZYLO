import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { router } from './routes';

const rootElement = document.getElementById('root');
const AppTree = (
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, AppTree);
} else {
  createRoot(rootElement).render(AppTree);
}
