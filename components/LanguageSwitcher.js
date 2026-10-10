import Link from "next/link";
import {useRouter} from "next/router";
import {languages, useTranslation} from "../locales";

const LanguageSwitcher = () => {
  const router = useRouter();
  const t = useTranslation();

  // remember the choice so Next's locale detection doesn't override it
  const rememberLocale = (code) => {
    document.cookie = `NEXT_LOCALE=${code}; path=/; max-age=31536000; SameSite=Lax`;
  };

  return <div className='flex items-center gap-x-2 text-sm font-semibold tracking-widest' aria-label={t.language.label}>
    {languages.map((lang, index) => {
      return <div key={lang.code} className='flex items-center gap-x-2'>
        {index > 0 && <span className='text-white/30'>|</span>}
        <Link
          href={router.asPath}
          locale={lang.code}
          scroll={false}
          onClick={() => rememberLocale(lang.code)}
          title={lang.name}
          hrefLang={lang.code}
          aria-current={router.locale === lang.code ? 'true' : undefined}
          className={`${router.locale === lang.code ? 'text-accent' : 'hover:text-accent'} transition-all duration-300`}
        >
          {lang.label}
        </Link>
      </div>
    })}
  </div>;
};

export default LanguageSwitcher;
