import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slotweekday'
})
export class SlotweekdayPipe implements PipeTransform {

  transform(value, term: string): any {
    if (!term) { return value; }
    return (value || []).filter(slot => slot.weekDay === parseInt(term, 10));
  }

}
