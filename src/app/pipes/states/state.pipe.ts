import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(value: any, term: any): any {
    if (!term) { return value; }
    return (value || []).filter(x => x.countryCode === parseInt(term, 10));
  }

}
