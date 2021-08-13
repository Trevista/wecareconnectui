import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getNameFromUrl'
})
export class GetNameFromUrlPipe implements PipeTransform {

  transform(value: string): string {
    if(value){
      let urlNames = value.split('/');
      return urlNames[urlNames.length - 1].split('?')[0];
    }
    return '';
  }

}
