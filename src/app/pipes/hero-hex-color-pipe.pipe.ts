import { Pipe, PipeTransform } from '@angular/core';
import { ColorMap, Color } from '../interfaces/Hero';
@Pipe({
  name: 'heroHexColorPipe'
})
export class HeroHexColorPipePipe implements PipeTransform {

  transform(value: Color): string {
    return ColorMap[value];
  }

}
