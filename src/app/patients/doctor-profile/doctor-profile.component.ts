import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonServiceService } from './../../common-service.service';
import { ToastrService } from 'ngx-toastr';
import { ReviewsService } from 'src/app//services/reviews.service';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css'],
})
export class DoctorProfileComponent implements OnInit {
  id;
  //doctorDetails:any;
    Education: any;
    Experience: any;
    Awards: any;
    Specializations: any;
    appointmentSlots: any;
  doctorDetails: any = [];
    Address: any;
    clinics: ClientData[] = [];
  constructor(
    public commonService: CommonServiceService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    public review: ReviewsService,
    public appointmentService: AppointmentService
  ) {}
  images = [
    {
      path: 'assets/img/features/feature-01.jpg',
    },
    {
      path: 'assets/img/features/feature-02.jpg',
    },
    {
      path: 'assets/img/features/feature-03.jpg',
    },
    {
      path: 'assets/img/features/feature-04.jpg',
    },
  ];
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.id = this.route.snapshot.queryParams['id'];
    this.getDoctorsDetails();
    this.getReviews();
  }

  getAppointmentSlots(userId) {
    this.appointmentService.getAppointmentSlots(userId).subscribe(x => {
      this.appointmentSlots = x;
      console.log(x);
    });
  }

  getDoctorsDetails() {
    if (!this.id) {
      this.id = 1;
    }
    this.commonService.getdoctorprofile(this.id).subscribe((res) => {
      this.doctorDetails = res;
      this.getAppointmentSlots(this.doctorDetails.userId);
      this.Education = res.educationBackground;
      this.Experience = res.experience;
      this.Awards = res.awards;
      this.Specializations = res.specializations;
      this.Address = res.contactInfo;
      if (res.clinicInfo !== null){
        this.clinics.push(res.clinicInfo);
        console.log(this.clinics);
      }
      console.log(this.Education);
    });
  }

  addFav() {
    this.commonService.createFav(this.doctorDetails).subscribe((res) => {
      this.toastr.success('', 'Added to favourite successfully!');
      document.getElementById('fav-btn').style.background = '#fb1612';
      document.getElementById('fav-btn').style.color = '#fff';
    });
  }

  reviews:any;
  getReviews(){
    this.review.get_reviews().subscribe((data: any[]) => {

      this.reviews = data['reviewList'];
      console.log('review data',this.reviews['childReviews']);
    })
  }
}
