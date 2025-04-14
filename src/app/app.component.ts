import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LocaleServiceService } from './services/locale.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pipe-app';
  localService = inject(LocaleServiceService);
  localeSelected = signal(this.localService.getCurrentLocale);

  locales = [
    {
      label: 'Español México',
      value: 'es-MX',
    },
    {
      label: 'Francés',
      value: 'fr',
    },
  ];

  changeLocale(event: Event) {
    const selectedLocale = (event.target as HTMLSelectElement).value;
    this.localService.changeLanguage(selectedLocale);
  }
}
