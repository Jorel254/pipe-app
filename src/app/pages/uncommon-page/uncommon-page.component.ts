import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { I18nPluralPipe, I18nSelectPipe, SlicePipe } from '@angular/common';
@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  client1 = {
    name: 'Juan',
    age: 20,
    address: 'Mexico, CDMX',
    gender: 'male',
  };
  client2 = {
    name: 'Maria',
    age: 25,
    address: 'Mexico, CDMX',
    gender: 'female',
  };

  client = signal(this.client1);

  changeClient() {
    if (this.client() === this.client1) {
      this.client.set(this.client2);
    } else {
      this.client.set(this.client1);
    }
  }

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  // i18nPlural
  clients = signal(['Maria', 'Juan', 'Pedro', 'Ana', 'Luis']);

  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient() {
    this.clients.update((clients) => clients.slice(0, -1));
  }
}
