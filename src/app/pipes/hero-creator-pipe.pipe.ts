import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/Hero';

@Pipe({
  name: 'heroCreatorPipe'
})
export class HeroCreatorPipePipe implements PipeTransform {

  transform(value: Creator): string {
    return value === Creator.DC ? 'El creador es DC' : 'El creador es Marvel';
  }

}
