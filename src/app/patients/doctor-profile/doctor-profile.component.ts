import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonServiceService } from './../../common-service.service';
import { ToastrService } from 'ngx-toastr';

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
  doctorDetails: any = [];
    Address: any;
  constructor(
    public commonService: CommonServiceService,
    private route: ActivatedRoute,
    private toastr: ToastrService
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
  }

  getDoctorsDetails() {
    if (!this.id) {
      this.id = 1;
    }
    this.commonService.getdoctorprofile(this.id).subscribe((res) => {
      console.log(res);
      this.doctorDetails = res;
      this.Education = res['educationBackground'];
      this.Experience = res['experience'];
      this.Awards = res['awards'];
      this.Specializations = res['specializations'];
      this.Address = res['contactInfo'];
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
}
