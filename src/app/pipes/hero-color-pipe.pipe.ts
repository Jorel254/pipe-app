import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/Hero';

@Pipe({
  name: 'heroColorPipe',
})
export class HeroColorPipePipe implements PipeTransform {
  transform(value: Color): string {
    return Color[value];
  }
}
