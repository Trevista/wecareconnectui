export interface Appointment {
  id: number;
  appointmentDate: Date;
  visitReason: string;
  doctorId: number;
  patientId?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  invoiceNumber: string;
  dateMap?: any;
  status?: string;
  checked?: boolean;
}
