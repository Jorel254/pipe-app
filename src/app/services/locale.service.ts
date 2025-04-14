import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocaleServiceService {
  private currentLocale = signal('es-MX');

  constructor() {
    this.currentLocale.set(sessionStorage.getItem('locale') ?? 'es-MX');
  }

  get getCurrentLocale() {
    return this.currentLocale();
  }

  changeLanguage(locale: string) {
    sessionStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    location.reload();
  }
}
