import { Component, signal } from '@angular/core';
import { ToogleCasePipe } from '../../pipes/toogle-case.pipe';
import { CardComponent } from '../../components/card/card.component';
import { heroes } from '../../constants/HeroData';
@Component({
  selector: 'app-custom-page',
  imports: [ToogleCasePipe, CardComponent],
  templateUrl: './custom-page.component.html',
  styleUrl: './custom-page.component.css',
})
export class CustomPageComponent {
  toogleCase = signal(true);

  changeToogleCase() {
    this.toogleCase.update((value) => !value);
  }

  heroes = signal(heroes);
}
