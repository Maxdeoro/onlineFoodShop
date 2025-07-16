import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Menu } from './pages/menu/Menu.tsx';
import { Cart } from './pages/cart/Cart.tsx';
import { Error } from './pages/error/Error.tsx';
import { Layout } from './layout/menu/Layout.tsx';
import { Product } from './pages/product/Product.tsx';
import axios from 'axios';
import { PREFIX } from './helpers/API.ts';

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
      {
        path: '/product/:Id',
        element: <Product/>,
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
    {/* <App /> */}
    <RouterProvider router={myRouter}></RouterProvider>
  </StrictMode>
)
