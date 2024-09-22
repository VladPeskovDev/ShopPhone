import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css'; // Подключаем стили
import Footer from './ui/Footer';
import Header from './ui/Header';

export default function Layout(): JSX.Element {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
