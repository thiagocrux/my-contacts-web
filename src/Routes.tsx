import { createBrowserRouter } from 'react-router';
// @ts-expect-error TS(2307): Cannot find module 'react-router/dom' or its corre... Remove this comment to see the full error message
import { RouterProvider } from 'react-router/dom';

// @ts-expect-error TS(6142): Module './pages/Home' was resolved to '/home/thiag... Remove this comment to see the full error message
import Home from './pages/Home';
// @ts-expect-error TS(6142): Module './pages/NewContact' was resolved to '/home... Remove this comment to see the full error message
import NewContact from './pages/NewContact';
// @ts-expect-error TS(6142): Module './pages/EditContact' was resolved to '/hom... Remove this comment to see the full error message
import EditContact from './pages/EditContact';

const routes = [
  {
    path: '/',
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    children: [{ path: '', element: <Home /> }],
  },
  {
    path: '/',
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    children: [{ path: 'new', element: <NewContact /> }],
  },
  {
    path: '/',
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    children: [{ path: 'edit/:id', element: <EditContact /> }],
  },
];

export default function Routes() {
  const router = createBrowserRouter(routes, {
    future: {
      // @ts-expect-error TS(2322): Type '{ v7_startTransition: true; v7_fetcherPersis... Remove this comment to see the full error message
      v7_startTransition: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  });

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <RouterProvider router={router} />;
}
