import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-MX';
import localeFr from '@angular/common/locales/fr';
import { LocaleServiceService } from './services/locale.service';

registerLocaleData(localeEs);
registerLocaleData(localeFr);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      deps: [LocaleServiceService],
      useFactory: (localeService: LocaleServiceService) => localeService.getCurrentLocale,
    },
  ],
};
