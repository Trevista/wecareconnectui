import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { CommonServiceService } from './../../common-service.service';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  doctorDetails;
  doctorId;
  firstName;
  lastName;
  email;
  phone;
  appointments: any = [];
  patients: any = [];
  userValue;
  userProfile;
  appointmentDate;
  public appointmentForm: FormGroup;
  public submitted = false;
  discount = 0;
  bookingFee = 0;
  checkbox;
  couponCode;
  isPatient = false;
    cuponcodevalidation: boolean=false;
    isConfirmed:boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public commonService: CommonServiceService,
    public auth: AuthenticationService,
    public userService: UserService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    public appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    this.doctorDetails = this.userService.doctor;
    this.doctorId = this.route.snapshot.queryParams.id;
    this.appointmentDate = this.route.snapshot.queryParams.date;
    this.appointmentForm = this.formBuilder.group({
      id : ['', Validators.required],
      appointmentDate : ['', Validators.required],
      visitReason : ['', Validators.required],
      doctorId : ['', Validators.required],
      patientId : [null],
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email : ['', Validators.required],
      phone : ['', Validators.required],
      invoiceNumber : ['', Validators.required],
      status : [1, Validators.required],
      });
    this.getDoctorsDetails();
    this.allPatients();
    this.getAppointments();
    this.getPatientProfile();
  }
  checkType(event) {
    this.isPatient = event.target.checked ? true : false;
  }
  get f(){
    return this.appointmentForm.controls;
  }

  get data(): any {
    return this.appointmentService.appointmentData;
  }

  set data(value: any) {
    this.appointmentService.appointmentData = value;
  }

  get total(){
    return this.doctorDetails?.feePerVisit + this.bookingFee - this.discount;
  }

  getPatientProfile() {
    this.userValue = this.auth.userValue;
    if (this.userValue?.id){
      const userDetails: Appointment = {
        id: 0,
        firstName:  this.userValue.firstName,
        lastName: this.userValue.lastName,
        email: this.userValue.email,
        appointmentDate: this.appointmentDate,
        visitReason: '',
        doctorId: parseInt(this.doctorId, 10),
        phone: '',
        invoiceNumber: ''
      };
      this.appointmentForm.patchValue(userDetails);
      this.userService.getProfile(this.userValue.id).subscribe(x => {
        this.userProfile = x;
        this.appointmentForm.get('patientId').patchValue(x.userId);
        this.appointmentForm.get('phone').patchValue(x.phoneNumber);
      });
    }
  }

  getDoctorsDetails() {
    if (!this.doctorId) {
      this.doctorId = 1;
    }
    this.userService.getProfile(this.doctorId).subscribe((res) => {
      this.doctorDetails = res;
    });
  }

  applyDiscount(){
    this.userService.getCouponByCode(this.couponCode).subscribe(x => {
      this.cuponcodevalidation = true;
      console.log(this.couponCode);
      console.log(x);
      this.discount = this.total * (x.discountPercent / 100);
      this.toastr.success('Coupon Applied', 'Success');
      
    }, (error) => {
      this.cuponcodevalidation = false;
      this.toastr.error('Invalid Coupon Code', 'Error');
    });
  }

  allPatients() {
    this.commonService.getpatients().subscribe((res) => {
      this.patients = res;
    });
  }

  patientDetails() {
    const userId = localStorage.getItem('id');
    this.commonService.getPatientDetails(Number(userId)).subscribe((res) => {
      this.patients = res;
    });
  }

  getAppointments() {
    this.commonService.getAppointments().subscribe((res) => {
      this.appointments = res;
    });
  }

  booking() {
    this.isConfirmed = true;
    const params = {
      appointment: this.appointmentForm.value,
      invoice: {
        patientFirstName: this.appointmentForm.get('firstName').value,
        patientLastName:  this.appointmentForm.get('lastName').value,
        patientEmail: this.appointmentForm.get('email').value,
        payAmount: this.doctorDetails?.feePerVisit,
        totalAmount: this.total,
        discount: this.discount,
        serviceFee: this.bookingFee,
        paymentDate:  new Date(),
        patientId: this.appointmentForm.get('patientId').value,
        doctorId: this.appointmentForm.get('doctorId').value,
        appoinmentId: 0,

      },
      doctor: this.doctorDetails
    };

    this.data = params;
    
    this.appointmentService.createAppointment(params).subscribe(x => {
      this.toastr.success('', 'Appointment booked successfully!');
      this.data.appointment.appointmentId = x;
      this.router.navigate(['/patients/success']);
    }, (error) => {
      this.isConfirmed = false;
      this.toastr.error('', 'Appointment booking failed!');
    });
  }
}
