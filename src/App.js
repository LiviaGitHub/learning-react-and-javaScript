import React from 'react';
import { HomePage } from './components/home/index.jsx';
import { ContactPage } from './components/contact/index.jsx';
import { ProjectsPage } from './components/projects/index.jsx';
import { DestructuringArraysPage } from './components/projects/project-detail/destructuring-arrays/index.jsx';
import { DestructuringObjectsPage } from './components/projects/project-detail/destructuring-objects/index.jsx';
import { HandleSideEffectsPage } from './components/projects/project-detail/handle-side-effects/index.jsx';
import { FormSubmissionPage } from './components/projects/project-detail/form-submission/index.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorBoundary from './components/error/ErrorBoundary.js';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/home', element: <HomePage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/projects/project-detail/destructuring-arrays', element: <DestructuringArraysPage /> }, 
  { path: '/projects/project-detail/destructuring-objects', element: <DestructuringObjectsPage /> },
  { path: '/projects/project-detail/handle-side-effects', element: <HandleSideEffectsPage /> },
  { path: '/projects/project-detail/form-submission', element: <FormSubmissionPage /> },
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
