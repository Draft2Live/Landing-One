// Subdomain mapping for each locale.
// To add a new language: add entry here + create messages/<locale>.json + add build script.
export const subdomains: Record<string, string> = {
  uk: 'https://uk.draft2live.com',
  en: 'https://en.draft2live.com',
  ru: 'https://ru.draft2live.com',
  pl: 'https://pl.draft2live.com',
};

// All available locale codes (derived from subdomains config)
export const allLocales = Object.keys(subdomains);
