import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';


// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "main.component.title": "Welcome",
      "navigation.home":"Home",
      "navigation.Shop":"Shop",
      "navigation.Corzina":"Corzina",
      "navigation.Pages":"Pages",
      "shop_now":"SHOP NOW",
      "deals_donth":"Deals Of The Month",
      "text_lorem":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin ",
      "buy_now":"Buy Now"
    }
  },
  ru: {
    translation: {
      "main.component.title": "Добро пожаловать",
       "navigation.home":"Домой",
       "navigation.Shop":"Магазин",
       "navigation.Corzina":"Корзина",
       "navigation.Pages":"Страницы",
       "shop_now":"КУПИТЬ СЕЙЧАС",
       "deals_donth":"Предложения месяца",
       "text_lorem":"Клиент очень важен, за клиентом пойдет клиент. Немного шоколадного соуса для баскетбола. Две шоколадки для баскетбола",
       "buy_now":"Купить сейчас"
    }
  },
  // ua: 
  // {
  //   translation: 
  // }
};

i18n
  .use(LanguageDetector) 
  .use(Backend)// passes i18n down to react-i18next
  .init({
    // resources,
    supportedLngs: ['ru', 'en', 'ua'],
    debug:true,
    fallbackLng: ["en", "ru", "ua"],
    //lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: "../locales/{{lng}}.json"
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react:{
      useSuspense:true,
    }
    })
    // .then((t) => {
    //   t('key'); // -> same as i18next.t
    //   })
    // .changeLanguage('en')
  
export default i18n;