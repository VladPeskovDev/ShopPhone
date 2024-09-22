import React from 'react';
import { FaTelegramPlane, FaWhatsapp, FaVk, FaGlobe } from 'react-icons/fa';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer(): JSX.Element {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string): void => {
    void i18n.changeLanguage(lng);
  };
  return (
    <footer className="footer">
      
      <div className="footer-column">
        <div className="footer-logo">© QPICK</div>
      </div>

      
      <div className="footer-column">
      <Link to="/like" className="footer-link">Избранное</Link>
        <div><Link to="/cart" className="footer-link">Корзина</Link></div>
        <a href="https://t.me/VladislavPeskov" target="_blank" rel="noreferrer" className="footer-link">Контакты</a>
      </div>

      
      <div className="footer-column">
        <div>{t('termsOfService')}</div>
        <div className="footer-language">
          <FaGlobe className="icon-globe" />
          <button onClick={() => changeLanguage('ru')}>Рус</button> / 
          <button onClick={() => changeLanguage('en')}>Eng</button>
        </div>
      </div>

      
      <div className="footer-column footer-icons">
        <a href="https://t.me/VladislavPeskov" target="_blank" rel="noreferrer" className="icon-link">
          <FaTelegramPlane className="icon" />
        </a>
        <a href="https://wa.me/79165780936?text=Здравствуйте, хочу купить наушники" target="_blank" rel="noreferrer" className="icon-link"> 
          <FaWhatsapp className="icon" />
        </a>
        <a href="https://vk.com/id64233288" target="_blank" rel="noreferrer" className="icon-link">
          <FaVk className="icon" />
        </a>
      </div>
    </footer>
  );
}
