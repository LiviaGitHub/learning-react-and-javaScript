import React from 'react';
import { HomePage } from './components/home/index.jsx';
import { Contact } from './components/contact/index.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/home', element: <HomePage /> },
  { path: '/contact', element: <Contact /> },
]);

export const App = () => {
  return (
    <RouterProvider router={router}>
      <div>
        <HomePage />
      </div>
    </RouterProvider>
  );
};

export default App;
