import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'latin-ext', 'cyrillic'], variable: '--font-inter', weight: ['100', '300', '400', '500', '600', '700', '800', '900'] });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', weight: ['500', '700'] });

// Root-level metadata — shared across all locales. Locale-specific title/description/OG
// are set in src/app/[locale]/layout.tsx via generateMetadata().
export const metadata: Metadata = {
  metadataBase: new URL('https://draft2live.ai'),
  icons: { icon: '/favicon.svg' },
};

const buildLocale = process.env.NEXT_PUBLIC_LOCALE || 'uk';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={buildLocale} className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="noise min-h-screen antialiased">{children}</body>
    </html>
  );
}
