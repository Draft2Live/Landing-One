import { defineRouting } from 'next-intl/routing';
import { allLocales } from '@/config/subdomains';

// Single-locale build: NEXT_PUBLIC_LOCALE selects which locale this build serves.
// Falls back to 'uk' if not set.
const buildLocale = process.env.NEXT_PUBLIC_LOCALE || 'uk';

if (!allLocales.includes(buildLocale)) {
  throw new Error(
    `Unknown NEXT_PUBLIC_LOCALE="${buildLocale}". Available: ${allLocales.join(', ')}`,
  );
}

export const routing = defineRouting({
  locales: [buildLocale],
  defaultLocale: buildLocale,
  localePrefix: 'always',
});

export type Locale = (typeof routing.locales)[number];
