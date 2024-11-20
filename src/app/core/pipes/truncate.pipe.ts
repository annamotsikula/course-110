import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 3) {
    const words: string[] = value.split(/\s+/);
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }

    return value;
  }
}
