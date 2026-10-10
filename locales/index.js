import {useRouter} from "next/router";
import en from "./en";
import es from "./es";

export const translations = { en, es };

export const languages = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
];

export const useTranslation = () => {
  const { locale, defaultLocale } = useRouter();
  return translations[locale] || translations[defaultLocale] || en;
};
