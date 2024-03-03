import { redirect } from 'next/navigation';
import i18nConfig from '../../i18n';

export async function GET(request) {
  const userPreferredLanguage =
    request.headers.get('accept-language')?.split(',')?.[0] ??
    i18nConfig.defaultLocale;

  const lang = i18nConfig.locales.includes(userPreferredLanguage)
    ? userPreferredLanguage
    : i18nConfig.defaultLocale;

  return redirect(`/${lang}${request.nextUrl.pathname.toLowerCase()}`);
}
