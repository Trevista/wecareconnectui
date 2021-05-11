export interface AppointmentSlot {
  id: number;
  weekDay: number;
  doctorId: number;
  startTime: string;
  endTime: string;
}

export interface TimeSlot{
  appointmentSlots: AppointmentSlot[];
  responseStatus: boolean;
  responseMessage: string;
}
