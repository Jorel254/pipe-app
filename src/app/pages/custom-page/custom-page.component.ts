import { Component, signal } from '@angular/core';
import { ToogleCasePipe } from '../../pipes/toogle-case.pipe';
import { CardComponent } from '../../components/card/card.component';
import { heroes } from '../../constants/HeroData';
import { CanFlyPipePipe } from '../../pipes/can-fly-pipe.pipe';
import { HeroColorPipePipe } from '../../pipes/hero-color-pipe.pipe';
import { HeroCreatorPipePipe } from '../../pipes/hero-creator-pipe.pipe';
import { Creator, Hero } from '../../interfaces/Hero';
import { TitleCasePipe } from '@angular/common';
import { HeroHexColorPipePipe } from '../../pipes/hero-hex-color-pipe.pipe';
import { HeroSortByPipePipe } from '../../pipes/hero-sort-by-pipe.pipe';
import { HeroFilerPipePipe } from '../../pipes/hero-filer-pipe.pipe';
@Component({
  selector: 'app-custom-page',
  imports: [
    ToogleCasePipe,
    CardComponent,
    CanFlyPipePipe,
    HeroColorPipePipe,
    HeroCreatorPipePipe,
    TitleCasePipe,
    HeroHexColorPipePipe,
    HeroSortByPipePipe,
    HeroFilerPipePipe,
  ],
  templateUrl: './custom-page.component.html',
  styleUrl: './custom-page.component.css',
})
export class CustomPageComponent {
  toogleCase = signal(true);

  heroes = signal(heroes);

  creatorHero = Creator;

  sortBy = signal<keyof Hero | null>(null);

  search = signal('');

  changeToogleCase() {
    this.toogleCase.update((value) => !value);
  }

  changeSortBy(sortBy: keyof Hero) {
    this.sortBy.set(sortBy);
  }
}
