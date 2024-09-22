import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import './Layout.css'; // Подключаем стили

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      
    </div>
  );
};

export default Layout;
