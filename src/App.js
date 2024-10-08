import React from 'react';
import { Header } from './components/header/index.jsx';
import { Footer } from './components/footer/index.jsx';
import { HomePage } from './components/home/index.jsx';
import { ContactPage } from './components/contact/index.jsx';
import { AboutPage } from './components/about/index.jsx';
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
import { UseStatePage } from './components/projects/project-detail/use-state';
import { ContentEditablePage } from './components/projects/project-detail/content-editable';
import { MapingDataPage } from './components/projects/project-detail/maping-data';
import { KeeperPage } from './components/projects/project-detail/keeper';
import { ConditionalTernaryOperatorPage } from './components/projects/project-detail/conditional-ternary-operator';
import { ButtonPage } from './components/projects/project-detail/button';
import { UseStateHooksPage } from './components/projects/project-detail/useState-hooks';
import { UseStateGetTimePage } from './components/projects/project-detail/useState-getTime';
import { ObjectAndArrayDestructuringPage } from './components/projects/project-detail/object-array-destructuring';
import { EventAttributesPage } from './components/projects/project-detail/event-attributes';
import { FormEventPage } from './components/projects/project-detail/form-event';
import { ChangingStatetPage } from './components/projects/project-detail/changing-state';
import { SpreadOperatorPage } from './components/projects/project-detail/spread-operator';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorBoundary from './components/error/ErrorBoundary.js';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/home', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
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
  { path: '/projects/project-detail/use-state', element: <UseStatePage /> },
  { path: '/projects/project-detail/content-editable', element: <ContentEditablePage /> },
  { path: '/projects/project-detail/maping-data', element: <MapingDataPage /> },
  { path: '/projects/project-detail/keeper', element: <KeeperPage /> },
  { path: '/projects/project-detail/conditional-ternary-operator', element: <ConditionalTernaryOperatorPage /> },
  { path: '/projects/project-detail/button', element: <ButtonPage /> },
  { path: '/projects/project-detail/useState-hooks', element: <UseStateHooksPage /> },
  { path: '/projects/project-detail/useState-getTime', element: <UseStateGetTimePage /> },
  { path: '/projects/project-detail/object-array-destructuring', element: <ObjectAndArrayDestructuringPage /> },
  { path: '/projects/project-detail/event-attributes', element: <EventAttributesPage /> },
  { path: '/projects/project-detail/form-event', element: <FormEventPage /> },
  { path: '/projects/project-detail/changing-state', element: <ChangingStatetPage /> },
  { path: '/projects/project-detail/spread-operator', element: <SpreadOperatorPage /> },
]);

export const App = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router}>
        <Header />
        <Footer />
      </RouterProvider>
    </ErrorBoundary>
  );
};

export default App;
