import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'appointmentdate'
})
export class AppointmentdatePipe implements PipeTransform {

  transform(appointments: any, filter: any): any {
    console.log(appointments);
    console.log(filter);
    const date = new Date();
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    if (filter === 'upcoming'){
      return appointments.filter(x => moment(x.appointmentDate).diff(new Date()) >= 1);
    }
    else{
      appointments.forEach(element => {
        console.log(typeof element.appointmentDate);
      });
      return appointments.filter(x =>  moment(x.appointmentDate).isBetween(moment(today),
      moment(new Date()).add(1, 'day')));
    }
  }

}
