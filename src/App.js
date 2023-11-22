import React from 'react';
import { HomePage } from './components/home/index.jsx';
import { ContactPage } from './components/contact/index.jsx';
import { ProjectsPage } from './components/projects/index.jsx';
import { DestructuringArraysPage } from './components/projects/project-detail/destructuring-arrays/index.jsx';
import { DestructuringObjectsPage } from './components/projects/project-detail/destructuring-objects/index.jsx';
import { HandleSideEffectsPage } from './components/projects/project-detail/handle-side-effects/index.jsx';
import { FormSubmissionPage } from './components/projects/project-detail/form-submission/index.jsx';
import { BasicFormPage } from './components/projects/project-detail/hooks/basic-form.jsx';
import { RestSpreadOperatorPage } from './components/projects/project-detail/rest-spread-operator/index.jsx';
import { TemplateLiteralsPage } from './components/projects/project-detail/template-literals/index.jsx';
import { UsingAndOutputtingDynamicValuesPage } from './components/projects/project-detail/using-and-outputting-dynamic-values';
import { AlternativePropsSyntaxesPage } from './components/projects/project-detail/alternative-props-syntaxes';
import { AllAboutPropsPage } from './components/projects/project-detail/all-about-props';

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
  { path: '/projects/project-detail/hooks', element: <BasicFormPage /> },
  { path: '/projects/project-detail/rest-spread-operator', element: <RestSpreadOperatorPage /> },
  { path: '/projects/project-detail/template-literals', element: <TemplateLiteralsPage /> },
  { path: '/projects/project-detail/using-and-outputting-dynamic-values', element: <UsingAndOutputtingDynamicValuesPage /> },
  { path: '/projects/project-detail/alternative-props-syntaxes', element: <AlternativePropsSyntaxesPage /> },
  { path: '/projects/project-detail/all-about-props', element: <AllAboutPropsPage /> },
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
