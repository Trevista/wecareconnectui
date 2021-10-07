import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluck'
})
export class PluckPipe implements PipeTransform {

  transform(input: any[], key: any): string {
      return input.map(v => v[key]).join();
  }

}
