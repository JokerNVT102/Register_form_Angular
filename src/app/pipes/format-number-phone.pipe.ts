import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumberPhone',
})
export class FormatNumberPhonePipe implements PipeTransform {
  transform(value: string): string {
    if (value.length > 0) {
      var num1 = value.slice(0, 3);
      var num2 = value.slice(3, 6);
      var num3 = value.slice(6);
      return `(${num1})-${num2}-${num3}`;
    }
  }
}
