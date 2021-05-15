import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CommonServiceService } from '../common-service.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
declare const $: any;

export interface Doctors {
  id: number;
  doctor_name: string;
  speciality: string;
  Education: string;
  location: string;
}

@Component({
  selector: 'app-home-slider-one',
  templateUrl: './home-slider-one.component.html',
  styleUrls: ['./home-slider-one.component.css']
})
export class HomeSliderOneComponent implements OnInit {
  public searchForm: FormGroup;
  @ViewChild('slickModal1') slickModal1: SlickCarouselComponent;
  @ViewChild('slickModal2') slickModal2: SlickCarouselComponent;
  @ViewChild('slickModal3') slickModal3: SlickCarouselComponent;
  specialityList: any = [];
  auth = false;
  isPatient = false;
  searchText;
  doctors: any = [];
  slidepage: any;
  employeeCtrl = new FormControl();
  filteredEmployee: Observable<Doctors[]>;
  blogs: any = [];
  keyword = 'name';
  searchDoctor = [];
  public countries = [
    {
      id: 1,
      name: 'Albania',
      img: 'image',
    },
    {
      id: 2,
      name: 'Belgium',
    },
    {
      id: 3,
      name: 'Denmark',
    },
    {
      id: 4,
      name: 'Montenegro',
    },
    {
      id: 5,
      name: 'Turkey',
    },
    {
      id: 6,
      name: 'Ukraine',
    },
    {
      id: 7,
      name: 'Macedonia',
    },
    {
      id: 8,
      name: 'Slovenia',
    },
    {
      id: 9,
      name: 'Georgia',
    },
    {
      id: 10,
      name: 'India',
    },
    {
      id: 11,
      name: 'Russia',
    },
    {
      id: 12,
      name: 'Switzerland',
    },
  ];
    search: any;
  constructor(
    public router: Router,
    public commonService: CommonServiceService, private formBuilder: FormBuilder, private authService: AuthenticationService,
  ) {
    this.filteredEmployee = this.employeeCtrl.valueChanges.pipe(
      startWith(''),
      map((employee) =>
        employee ? this._filterEmployees(employee) : this.doctors.slice()
      )
    );
  }
  
  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchtext: [''],
      location:['']
      
    });
    window.scrollTo(0, 0);
    this.getspeciality();
    this.getDoctors();
    this.getblogs();

    // User's voice slider
    $('.testi-slider').each(function () {
      var $show = $(this).data('show');
      var $arr = $(this).data('arrow');
      var $dots = !$arr;
      var $m_show = $show;
      if ($show == 3) $m_show = $show - 1;
      $(this).slick({
        slidesToShow: $show,
        slidesToScroll: 1,
        arrows: $arr,
        autoplay: false,
        autoplaySpeed: 6000,
        adaptiveHeight: true,
        prevArrow:
          '<button type="button" class="prev-nav"><i class="icon ion-ios-arrow-back"></i></button>',
        nextArrow:
          '<button type="button" class="next-nav"><i class="icon ion-ios-arrow-forward"></i></button>',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: $m_show,
              slidesToScroll: 1,
              infinite: true,
              arrows: $arr,
              dots: $dots,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true,
            },
          },
        ],
      });
    });
  }
  searchdoctors() {
    console.log(this.authService.userValue);
    if (localStorage.getItem('auth') === 'true') {
      this.auth = true;
      this.isPatient = this.authService.userValue.role === 'User' ? true : false;
      console.log(this.isPatient);
      //this.commonService.message.subscribe((res) => {
      //  console.log(res);
      //  if (res === 'UserLogin') {
      //    this.router.navigateByUrl('/patients/search-doctor')
      //  }
        
      //});
      if (this.isPatient) {
        this.router.navigateByUrl('/patients/search-doctor')
      }
     
    }
    else {
      this.router.navigateByUrl('/login-page')
    }
   
    console.log(this.searchForm.controls['searchtext'].value);//here you will get input value through ng-model
  }
  private _filterEmployees(value: string): Doctors[] {
    const filterValue = value.toLowerCase();
    return this.doctors.filter(
      (state) => state.doctor_name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  slides = [
    {
      img: 'assets/img/specialities/specialities-05.png',
      msg:
        '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
      name: 'Dentist',
      position: 'CEO of VoidCoders',
    },
    {
      img: 'assets/img/specialities/specialities-01.png',
      msg:
        '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
      name: 'Urology',
      position: 'CEO of VoidCoders',
    },
    {
      img: 'assets/img/specialities/specialities-02.png',
      msg:
        '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
      name: 'Neurology',
      position: 'CEO of VoidCoders',
    },
    {
      img: 'assets/img/specialities/specialities-03.png',
      msg:
        '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
      name: 'Orthopedic',
      position: 'CEO of VoidCoders',
    },
    {
      img: 'assets/img/specialities/specialities-04.png',
      msg:
        '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
      name: 'Cardiologist',
      position: 'CEO of VoidCoders',
    },
    {
      img: 'assets/img/specialities/specialities-05.png',
      msg:
        '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
      name: 'Dentist',
      position: 'CEO of VoidCoders',
    },
    {
      img: 'assets/img/specialities/specialities-01.png',
      msg:
        '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
      name: 'Urology',
      position: 'CEO of VoidCoders',
    },
  ];
  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  slideConfig2 = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    speed: 500,
    variableWidth: true,
    arrows: false,
    autoplay: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  slideConfig3 = {
    dots: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  next() {
    this.slickModal1.slickNext();
  }

  prev() {
    this.slickModal1.slickPrev();
  }

  getspeciality() {
    this.commonService.getSpeciality().subscribe((res) => {
      this.specialityList = res;
    });
  }

  getDoctors() {
    this.commonService.getDoctors().subscribe((res) => {
      this.doctors = res;
      this.slidepage = {
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
      this.countries = [];
      this.doctors.forEach((index, i) => {
        this.countries.push({
          id: index.id,
          name: index.doctor_name,
        });
      });
    });
  }

  getblogs() {
    this.commonService.getBlogs().subscribe((res) => {
      this.blogs = res;
    });
  }

  selectEvent(item) {
    let filter = this.countries.filter((a) => a.name === item.name);
    this.router.navigateByUrl('/patients/doctor-profile?id=' + filter[0].id);
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }

  //// next step 2
  sliderContent = [
    {
      img: 'assets/img/features/1neurologist.png',
      msg:
        '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
      name: 'Neurology',
      position: 'CEO of VoidCoders',
    },
    {
      img: 'assets/img/features/2cardialogy.png',
      msg:
        '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
      name: 'Cardiology',
      position: 'CEO of VoidCoders',
    },
    {
      img: 'assets/img/features/3dentist.png',
      msg:
        '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
      name: 'Dentist',
      position: 'CEO of VoidCoders',
    },
    {
      img: 'assets/img/features/4dermotology.png',
      msg:
        '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
      name: 'Dermotology',
      position: 'CEO of VoidCoders',
    },
    {
      img: 'assets/img/features/5ent.png',
      msg:
        '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
      name: 'E N T',
      position: 'CEO of VoidCoders',
    },
    {
      img: 'assets/img/features/6gastroenterology.png',
      msg:
        '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
      name: 'Gastroenterology',
      position: 'CEO of VoidCoders',
    },
    {
      img: 'assets/img/features/7gaynaecology.png',
      msg:
        '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
      name: 'Gaynaecology',
      position: 'CEO of VoidCoders',
    },
    {
      img: 'assets/img/features/8generalmedicine.png',
      msg:
        '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
      name: 'General Medicine',
      position: 'CEO of VoidCoders',
    },
    {
      img: 'assets/img/features/9opthomology.png',
      msg:
        '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
      name: 'Opthomology',
      position: 'CEO of VoidCoders',
    },
    {
      img: 'assets/img/features/10orthopedic.png',
      msg:
        '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
      name: 'Orthopedic',
      position: 'CEO of VoidCoders',
    },
    {
      img: 'assets/img/features/11pediatrcian.png',
      msg:
        '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
      name: 'Pediatric',
      position: 'CEO of VoidCoders',
    },
    {
      img: 'assets/img/features/12psychology.png',
      msg:
        '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
      name: 'Psychology',
      position: 'CEO of VoidCoders',
    },
    {
      img: 'assets/img/features/13pulmonology.png',
      msg:
        '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
      name: 'Pulmonology',
      position: 'CEO of VoidCoders',
    },
    {
      img: 'assets/img/features/14urlogy.png',
      msg:
        '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
      name: 'Urology',
      position: 'CEO of VoidCoders',
    },
  ];
  slideConfigure = {
    dots: false,
    autoplay: false,
    infinite: true,
    variableWidth: true,
  };
  nextslide() {
    this.slickModal2.slickNext();
  }

  prevslide() {
    this.slickModal2.slickPrev();
  }

  nextpage() {
    this.slickModal3.slickNext();
  }

  prevpage() {
    this.slickModal3.slickPrev();
  }
}

