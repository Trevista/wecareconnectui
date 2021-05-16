import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.css']
})
export class PrescriptionsComponent implements OnInit, OnChanges, AfterViewInit {

  constructor(private fb: FormBuilder, private appointmentService: AppointmentService,
              private toaster: ToastrService) { }

  @Input()
  appointmentId;

  id;


  prescriptionForm: FormGroup;

  dataSource: MatTableDataSource<any>;

  medicineTypes = [
   {id: 'Liquid Solution', value: 'Liquid Solution'},
   {id: 'Tablet', value: 'Tablet'},
   {id: 'Capsule', value: 'Capsule'},
   {id: 'Drops', value: 'Drops'},
   {id: 'Injection', value: 'Injection'},
   {id: 'Inhaler', value: 'Inhaler'},
   {id: 'Implants', value: 'Implants'}
  ];

  displayedColumns = ['name', 'quantity', 'medicineType', 'description', 'appointmentDate'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.prescriptionForm = this.fb.group({
      id: [0],
      name : ['', Validators.required],
      medicineType: ['', Validators.required],
      description: [''],
      quantity: [0, Validators.required],
      appointmentId: []
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.id = changes.appointmentId.currentValue;
    this.loadPrescription(this.id);
  }

  loadPrescription(id) {
    this.appointmentService.getAppointmentPrescriptions(id).subscribe(x => {
        this.dataSource = new MatTableDataSource(x);
        this.dataSource.paginator = this.paginator;
        console.log(x);
    });
  }

  deleteMedicine(item){

  }

  onSubmit(){
    this.prescriptionForm.controls.appointmentId.patchValue(this.appointmentId);
    if (this.prescriptionForm.controls.id.value === 0){
      this.appointmentService.addAppointmentPrescriptions(this.prescriptionForm.value).subscribe(
        x =>{ this.toaster.success('Prescription Updated Succesfully');
              this.loadPrescription(this.id)},
        (error) => this.toaster.error('Unable to add Prescription')
      );
    }
    else{
      this.appointmentService.updateAppointmentPrescriptions(this.prescriptionForm.value).subscribe(
        x => this.toaster.success('Prescription Updated Succesfully'),
        (error) => this.toaster.error('Unable to update Prescription')
      );
    }
  }

}
