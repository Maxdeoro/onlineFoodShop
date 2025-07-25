import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Cart } from './pages/cart/Cart.tsx';
import { Error } from './pages/error/Error.tsx';
import { Layout } from './layout/menu/Layout.tsx';
import { Product } from './pages/product/Product.tsx';
import axios from 'axios';
import { PREFIX } from './helpers/API.ts';
import AuthLayout from './layout/auth/AuthLayout.tsx';
import Login from './pages/login/Login.tsx';
import Registration from './pages/registration/Registration.tsx';
import RequireAuth from './helpers/RequireAuth.tsx';

const Menu = lazy(() => import('./pages/menu/Menu.tsx'));

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <RequireAuth><Layout/></RequireAuth>,
    // element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<>Loading...</>}><Menu/></Suspense>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
          {
            path: 'login',
            element: <Login/>,
          },
          {
            path: 'registration',
            element: <Registration/>,
          },
        ],
      },
      {
        path: '*',
        element: <Error/>,
      },
      {
        // path: '/product/:Id',
        path: '/product/:id',
        element: <Product/>,
        errorElement: 'Oops! Something went wrong!',
        loader: async ({params}) => {
          const data = await axios.get(`${PREFIX}/products/${params.id}`);
          return data;
        },
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={myRouter}></RouterProvider>
  </StrictMode>
)
