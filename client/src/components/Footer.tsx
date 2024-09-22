import React from 'react';
import { FaTelegramPlane, FaWhatsapp, FaVk } from 'react-icons/fa'; // Импортируем иконки
import './Footer.css';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div>© QPICK</div>
        <div>Контакты</div>
        <div>Условия сервиса</div>
      </div>
      <div className="footer-right">
        {/* Иконки мессенджеров */}
        <a href="https://telegram.org" target="_blank" rel="noreferrer" className="icon-link">
          <FaTelegramPlane className="icon" />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="icon-link">
          <FaWhatsapp className="icon" />
        </a>
        <a href="https://vk.com" target="_blank" rel="noreferrer" className="icon-link">
          <FaVk className="icon" />
        </a>
      </div>
    </footer>
  );
}
