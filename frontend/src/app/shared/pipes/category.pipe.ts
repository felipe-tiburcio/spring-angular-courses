import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    if (value.toLowerCase() === 'backend') {
      return 'computer';
    }

    return 'code';
  }
}
