import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import NewContact from './pages/NewContact';
import EditContact from './pages/EditContact';

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/new',
      element: <NewContact />,
    },
    {
      path: '/edit/:id',
      element: <EditContact />,
    },
  ]);

  return <RouterProvider router={router} />;
}
