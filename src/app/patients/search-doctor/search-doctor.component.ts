import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonServiceService } from './../../common-service.service'
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit {
  doctors: any = [];
  filteredDoctors: any = [];
  specialityList: any = [];
  type;
  specialist = "";
  speciality;
  selDate;
  filter = {
    speciality : [],
    gender: ''
  };
  constructor(public commonService: CommonServiceService, public router: Router, private userService: UserService) { }
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
    this.getDoctors();
    this.getspeciality();
  }

  getDoctors() {
    this.userService.getDoctors().subscribe(res => {
      this.doctors = res.doctors;
      this.filteredDoctors = res.doctors;
      console.log(res);
    });
  }

  getspeciality() {
    this.commonService.getSpecialities().subscribe(res => {
      this.specialityList = res.specialities;
      this.specialityList.forEach(element => {
        element.checked = false;
      });
    })
  }

  checkType(event) {
    if (event.target.checked) {
      this.type = event.target.value;
       this.filter.gender = event.target.value;
    } else {
      this.type = "";
       this.filter.gender = "";
    }
   
  }

  search() {
    if (this.filter.gender.length > 0 || this.filter.speciality.length > 0) {
      this.filteredDoctors = [];
     this.doctors.forEach(element => {
       const specs = element.specalization?.split(',');
       if(this.filter.speciality.length > 0){
         this.filter.speciality.forEach(x => {
         if(specs.includes(x) && !this.filteredDoctors.includes(element)){
           console.log(this.filter.gender.length + element.gender);
           if(this.filter.gender.length === 0 || this.filter.gender === element.gender){
             console.log("I am here");
             this.filteredDoctors.push(element);
           }              
         }
       });
       }
       else{
         if(this.filter.gender === element.gender){
             this.filteredDoctors.push(element);
           }
       }
     });
    } else {
      this.filteredDoctors = this.doctors;
    }

  }

  checkSpeciality(event, specialit) {
    if (event.target.checked) {
      this.speciality = event.target.value;
    } else {
      this.speciality = "";
    }
    specialit.checked = event.target.checked;

    const filtered = this.specialityList.filter(a => a.checked);
    this.filter.speciality = filtered.map(x => x.name);
  }

  bookAppointment(id) {
    // if((localStorage.getItem('auth') === 'true') && (localStorage.getItem('patient') === 'true')) {
    this.router.navigateByUrl('/patients/booking?id=' + id);
    // } else {
    //   this.router.navigate(['/']);
    // }
  }

}
