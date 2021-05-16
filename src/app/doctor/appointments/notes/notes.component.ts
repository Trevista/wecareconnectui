import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit,  OnChanges {

  constructor(private fb: FormBuilder, private appointmentService: AppointmentService,
              private toaster: ToastrService) { }

  @Input()
  appointmentId;

  id;

  notesForm: FormGroup;

  ngOnInit(): void {
    this.notesForm = this.fb.group({
      id: [0],
      notes: [],
      instructions: [],
      appointmentId: []
    });

  }


  ngOnChanges(changes: SimpleChanges): void {
    this.id = changes.appointmentId.currentValue;
    this.loadNotes(this.id);
  }

  loadNotes(id) {
    this.appointmentService.getAppointmentNotes(id).subscribe(x => {
        this.notesForm.patchValue(x);
    });
  }

  onSubmit(){
    this.notesForm.controls.appointmentId.patchValue(this.appointmentId);
    if (this.notesForm.controls.id.value === 0){
      this.appointmentService.addAppointmentNote(this.notesForm.value).subscribe(
        x => this.toaster.success('Notes Updated Succesfully'),
        (error) => this.toaster.error('Unable to add Notes')
      );
    }
    else{
      this.appointmentService.updateAppointmentNotes(this.notesForm.value).subscribe(
        x => this.toaster.success('Notes Updated Succesfully'),
        (error) => this.toaster.error('Unable to update Notes')
      );
    }

  }

}
