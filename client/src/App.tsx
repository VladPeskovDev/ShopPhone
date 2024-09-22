import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import CatalogPage from './components/pages/CatalogPage';
import CartPage from './components/pages/CartPage';
import { CartProvider } from './components/CartContext'; // Импортируем CartProvider
import './App.css'; 

// Определение маршрутов
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        path: '/',
        element: <CatalogPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
]);

function App(): JSX.Element {
  return (
    <CartProvider> {/* Оборачиваем всё в CartProvider */}
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
