import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['ar', 'en'],
  defaultLocale: 'ar',
  // Ensure that English routes have /en/ prefix, while Arabic routes are at the root (optional, next-intl natively handles /ar and /en, to have default without prefix, we use localePrefix)
  localePrefix: 'as-needed' // This means default locale 'ar' does not need a prefix
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
