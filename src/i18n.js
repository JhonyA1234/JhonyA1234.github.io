import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa tus archivos de traducción
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

// Las traducciones disponibles
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

// Inicialización de i18next
i18n
  .use(initReactI18next) // pasa i18n al plugin de react
  .init({
    resources,
    lng: 'es', // idioma predeterminado
    fallbackLng: 'en', // si no encuentra la traducción en español, usa inglés
    interpolation: {
      escapeValue: false, // react ya hace el escape
    },
  });

export default i18n;
