import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Select2OptionData } from 'ng-select2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.css']
})
export class PrescriptionsComponent implements OnInit, OnChanges, AfterViewInit {

  constructor(private fb: FormBuilder, private appointmentService: AppointmentService,
              private toaster: ToastrService, private modalService: BsModalService) { }

  @Input()
  appointmentId;

  id;


  prescriptionForm: FormGroup;
  prescription: any = {name:"", quantity:"", medicineType:"Select Madicine", description:"" };
  prescriptions: any[] = [];
  dataSource: MatTableDataSource<any>;
  editDataSource: MatTableDataSource<any> = new MatTableDataSource(this.prescription);
  editdisplayedColumns = ['name', 'quantity', 'medicineType', 'description', 'addRow']
  previewdisplayedColumns = ['name', 'quantity', 'medicineType', 'description']
  medicineTypes: Array<Select2OptionData> = [
    {id: 'Select Madicine', text: 'Select Madicine', disabled: true},
   {id: 'Liquid Solution', text: 'Liquid Solution'},
   {id: 'Tablet', text: 'Tablet'},
   {id: 'Capsule', text: 'Capsule'},
   {id: 'Drops', text: 'Drops'},
   {id: 'Injection', text: 'Injection'},
   {id: 'Inhaler', text: 'Inhaler'},
   {id: 'Implants', text: 'Implants'}
  ];

  displayedColumns = ['name', 'quantity', 'medicineType', 'description', 'appointmentDate', 'delete'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild('Viewtemplate', { read: TemplateRef }) showPopUp:TemplateRef<any>;
  modalRef: BsModalRef;
  selectedPrescription: any;

  ngOnInit(): void {
    this.prescriptionForm = this.fb.group({
      id: [0],
      name : ['', Validators.required],
      medicineType: ['Select Madicine', Validators.required],
      description: [''],
      quantity: [0, Validators.required],
      appointmentId: []
    });
    this.prescriptions.push(JSON.parse(JSON.stringify(this.prescription)));
    this.editDataSource = new MatTableDataSource(this.prescriptions);
  }

  ngAfterViewInit() {
    if(this.dataSource)
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
    this.appointmentService.deleteAppointmentPrescriptionById(item.id).subscribe(data => {
      this.loadPrescription(this.id);
      this.modalRef.hide();
      this.toaster.success('', 'Prescription deleted successfully!');
    },
    (error)=> {
      this.modalRef.hide();
      this.toaster.success('', 'Not able to delete prescription. Please contact administrator.');
    })
  }

  onSubmit(){
    this.prescriptionForm.controls.appointmentId.patchValue(this.appointmentId);
    if (this.prescriptionForm.controls.id.value === 0){
      this.appointmentService.addAppointmentPrescriptions(this.prescriptionForm.value).subscribe(
        x =>{ this.toaster.success('Prescription Created Succesfully');
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

  add(element:any){
    element.isAdded = true;
    this.prescriptions.push(JSON.parse(JSON.stringify(this.prescription)));
    this.editDataSource = new MatTableDataSource(this.prescriptions); 
  }

  cancel(index:number){
    this.prescriptions.splice(index,1);
    this.editDataSource = new MatTableDataSource(this.prescriptions); 
  }

  preview(){
    this.modalRef = this.modalService.show(this.showPopUp, {class: 'modal-md modal-dialog-centered'});
    this.prescriptions = this.prescriptions.filter(p => !(p.name == "" || p.name == undefined));
    if(this.prescriptions && this.prescriptions.length > 0){
      this.prescriptions[this.prescriptions.length-1].isAdded = false;
      this.editDataSource = new MatTableDataSource(this.prescriptions); 
    }
    else{
      this.prescriptions = [];
      this.prescriptions.push(JSON.parse(JSON.stringify(this.prescription)));
      this.editDataSource = new MatTableDataSource(this.prescriptions);
    }
  }

  generate(){
    let prescriptions:any[] = JSON.parse(JSON.stringify(this.prescriptions.filter(p => !(p.name == "" || p.name == undefined))));
    this.prescriptions = [JSON.parse(JSON.stringify(this.prescription))];
    this.editDataSource = new MatTableDataSource(this.prescriptions);  
    prescriptions.forEach(p => {
      p.appointmentId = this.appointmentId;
      p.id = 0;
      this.appointmentService.addAppointmentPrescriptions(p).subscribe(
        x =>{ this.toaster.success('Prescription Updated Succesfully');
              this.loadPrescription(this.id)},
        (error) => this.toaster.error('Unable to add Prescription')
      );
    }); 
     
  }

  openModal(template: TemplateRef<any>, prescription) {
    this.appointmentId = prescription;
    this.selectedPrescription = prescription;
    this.modalRef = this.modalService.show(template, {class: 'modal-md modal-dialog-centered'});
  }
}
