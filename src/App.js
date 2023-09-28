import React from 'react';
import { HomePage } from './components/home/index.jsx';
import { ContactPage } from './components/contact/index.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorBoundary from './components/error/ErrorBoundary.js'; // Import the ErrorBoundary component

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/home', element: <HomePage /> },
  { path: '/contact', element: <ContactPage /> },
]);

export const App = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router}>
        <div>
          <HomePage />
        </div>
      </RouterProvider>
    </ErrorBoundary>
  );
};

export default App;
