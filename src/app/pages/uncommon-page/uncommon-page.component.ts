import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { I18nSelectPipe } from '@angular/common';
@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe],
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
}
