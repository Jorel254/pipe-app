import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocaleServiceService } from '../../services/locale.service';
@Component({
  selector: 'app-basic-page',
  imports: [CommonModule],
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css',
})
export class BasicPageComponent {
  localService = inject(LocaleServiceService);

  nameLower = signal('Sergio');
  nameUpper = signal('SERGIO');
  fullName = signal('SERgio HerrERA');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => clearInterval(interval));
  });

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
