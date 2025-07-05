import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Menu } from './pages/menu/Menu.tsx';
import { Cart } from './pages/cart/Cart.tsx';
import { Error } from './pages/error/Error.tsx';
import { Layout } from './layout/menu/Layout.tsx';

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Menu/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '*',
        element: <Error/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={myRouter}></RouterProvider>
  </StrictMode>
)
