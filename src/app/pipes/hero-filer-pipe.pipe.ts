import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/Hero';

@Pipe({
  name: 'heroFilerPipe'
})
export class HeroFilerPipePipe implements PipeTransform {

  transform(value: Hero[], search:string): Hero[] {
    if (!search) return value;
    return value.filter(hero =>hero.name.toLowerCase().includes(search.toLowerCase()))
  }

}
