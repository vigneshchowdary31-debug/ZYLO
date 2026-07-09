import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy loaded views
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const CorporateEvents = lazy(() => import('./pages/CorporateEvents'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const Admin = lazy(() => import('./pages/Admin'));

/**
 * High-fidelity loading fallback matching the brand styling of ZYLO.
 */
const LoadingFallback = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '60vh',
      width: '100%',
      flexDirection: 'column',
      gap: '16px'
    }}
  >
    <div
      style={{
        width: '40px',
        height: '40px',
        border: '3px solid rgba(59,130,246,0.1)',
        borderTop: '3px solid var(--brand)',
        borderRadius: '50%',
        animation: 'rotateSlow 1s linear infinite'
      }}
    ></div>
    <span
      style={{
        fontSize: '0.8rem',
        fontWeight: '700',
        color: 'var(--brand)',
        letterSpacing: '2px',
        textTransform: 'uppercase'
      }}
    >
      Loading Zylo...
    </span>
  </div>
);

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        )
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        )
      },
      {
        path: 'corporate-events',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <CorporateEvents />
          </Suspense>
        )
      },
      {
        path: 'gallery',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Gallery />
          </Suspense>
        )
      },
      {
        path: 'blog',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Blog />
          </Suspense>
        )
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        )
      },
      {
        path: 'admin-login',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AdminLogin />
          </Suspense>
        )
      },
      {
        path: 'admin',
        element: (
          <ProtectedRoute>
            <Suspense fallback={<LoadingFallback />}>
              <Admin />
            </Suspense>
          </ProtectedRoute>
        )
      },
      {
        path: '*',
        element: <Navigate to="/" replace />
      }
    ]
  }
];
