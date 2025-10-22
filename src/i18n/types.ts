import { routing } from '@/i18n/routing';
import type messages from '@/public/i18n/messages/ko.json';
 
declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}

