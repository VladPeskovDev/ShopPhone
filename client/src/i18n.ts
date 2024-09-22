import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
  en: {
    translation: {
      "welcome": "Welcome to QPICK",
      "favorite": "Favorite",
      "cart": "Cart",
      "contacts": "Contacts",
      "termsOfService": "Terms of Service",
      "Buy": "Buy",
    }
  },
  ru: {
    translation: {
      "welcome": "Добро пожаловать в QPICK",
      "favorite": "Избранное",
      "cart": "Корзина",
      "contacts": "Контакты",
      "termsOfService": "Условия сервиса",
      "Buy": "Купить",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
