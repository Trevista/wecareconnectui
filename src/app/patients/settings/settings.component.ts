import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { FileloaderService } from 'src/app/services/fileloader.service';
import { CountriesResponse, State } from 'src/app/models/countriesresponse';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  [x: string]: any;

  constructor(private fb: FormBuilder,
              private auth: AuthenticationService, private toastr: ToastrService,
              private userService: UserService, private date: DatePipe, private fileService: FileloaderService,
              private spinner: NgxSpinnerService) { }
  patientprofileForm: FormGroup;
  files: File[] = [];
  profilePic: any = 'assets/img/doctors/doctor-thumb-02.jpg';
  countries: CountriesResponse;
  states: State[];
  statesData: Array<Select2OptionData>;
  formSubmitted: boolean;
  CommonDiseases: Array<Select2OptionData> = []; 
  options: Options;
  CorporateCustomers: Array<Select2OptionData> = []; 

  ngOnInit(): void {
    this.patientprofileForm = this.fb.group({
      id: [0, Validators.required],
      profilePic: [''],
      userName: [{ value: this.auth.userValue.email, disabled: true }, [Validators.required]],
      userId: [this.auth.userValue.id, [Validators.required]],
      email: [this.auth.userValue.email],
      firstName: [this.auth.userValue.firstName, [Validators.required]],
      lastName: [this.auth.userValue.lastName, [Validators.required]],
      phoneNumber: [{value: this.auth.userValue.phoneNumber, disabled: true}, [Validators.required]],
      gender: [null],
      dateOfBirth: ['', [Validators.required]],
      profileDescription: [null],
      contactInfo: this.getContactInfo(),
      isCorporate: [false],
      commonDiseases: [''],
      OtherDiseases:[''],
      anySurgeryIn6Months: ['false'],
      surgeryDetails: [''],
      corporateCompany:[''],
      languagesKnown:['', [Validators.required]]
    });
    this.getLanguages();
    this.getCountries();
    this.getCommonDiseases();
    this.getCorporateCustomers();
    this.options = {
      width: '400',
      multiple: true,
      tags: false
    }
  }

  getCountries(){
    this.userService.getCountriesResponse().subscribe(
      x => {
        this.countries = x;
        this.getProfile();
      }, (error) => {
      }
    );
  }

  countryChange(event){
    this.states =  this.countries.countries.find(x => x.countryCode === event).states;
    this.statesData = this.states.map(s => <Select2OptionData> {id: s.stateCode, text: s.stateName});
  }

  get f(){
    return this.patientprofileForm;
  }

  getContactInfo(): FormGroup {
    return this.fb.group({
      addressId: 0,
      address1: ['', [Validators.required]],
      address2: [null],
      city: ['', [Validators.required]],
      state: ['TG', ],
      country: ['IND'],
      zip: ['', [Validators.required]],
    });
  }

  getProfile() {
    this.userService.getProfile(this.auth.userValue.id).subscribe(x => {
      if (x.id !== null) {
        this.profilePic = x.profilePic;
        this.states =  this.countries.countries.find(a => a.countryCode === x.contactInfo.country).states || this.countries.states;
        this.statesData = this.states.map(s => <Select2OptionData> {id: s.stateCode, text: s.stateName});
        this.patientprofileForm.patchValue({
          ...x,
          dateOfBirth: this.date.transform(x.dateOfBirth, 'yyyy-MM-dd'),
          languagesKnown: x.languagesKnown? x.languagesKnown.split(',') : [],
          commonDiseases: x.commonDiseases? x.commonDiseases.split(',') : []
        });
      }
      console.log(this.f);
    }, (error) => {
      this.states =  this.countries.states;
      this.statesData = this.states.map(s => <Select2OptionData> {id: s.stateCode, text: s.stateName});
    });
  }

  onProfileSelect(event){
    let fileToUpload: File = event.target.files[0];
    console.log(fileToUpload.name);
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    const filepath = this.fileService.uploadFile(formData, this.auth.userValue.id)
      .subscribe(e => {
        const path = e.filePath.split('?');
        this.profilePic = path[0] + `?raw=1`;
        this.patientprofileForm.get('profilePic').patchValue(this.profilePic);
      });
  }

  onSubmit() {
    console.log(this.patientprofileForm.value);
    this.formSubmitted = true;
    if (this.patientprofileForm.valid) {
      this.spinner.show();
      let profileValue:any = {
        ...this.patientprofileForm.value
      };
      
      profileValue.languagesKnown = profileValue.languagesKnown? profileValue.languagesKnown.join() : '';
      profileValue.commonDiseases = profileValue.commonDiseases? profileValue.commonDiseases.join() : '';

      if (profileValue.id > 0) {
        this.userService.updateProfile(profileValue).subscribe(x => {
          this.spinner.hide();
          this.toastr.success('', 'Profile Updated Succesfully');
        }, (error) =>{
          this.toastr.error(error.title, 'Error Occured while updating Profile');
          this.spinner.hide();
        });
      } else {
        this.userService.saveProfile(profileValue).subscribe(x => {
          this.spinner.hide();
          this.toastr.success('', 'Profile Updated Succesfully');
        }, (error) =>{
          this.spinner.hide();
        });
      }

    }
    else {
      this.toastr.error(this.patientprofileForm.errors.toString(), 'Please Provide required details');
    }

  }

  getCommonDiseases() {
    // let diseases:any[] = ["Sugar", "Diabates", "thyroid"];
    // this.CommonDiseases = diseases.map(disease => <Select2OptionData> {id: disease, text: disease})
    this.userService.getCommonDiseases().subscribe(data => {
      this.CommonDiseases = data.map(disease => <Select2OptionData> {id: disease.disease, text: disease.disease})
    })
  }

  getCorporateCustomers() {
    // let companyNames:any[] = ["Appolo", "Yashoda", "Orange Hospital"];
    // this.CorporateCustomers = companyNames.map(company => <Select2OptionData> {id: company, text: company})
    this.userService.getCorporateCompanies().subscribe(data => {
      this.CorporateCustomers = data.map(company => <Select2OptionData> {id: company.id, text: company.companyName});
    })
  }

  getLanguages() {
    // let langs:any[] = ["English", "Telugu", "Hindi"];
    // this.languages = langs.map(language => <Select2OptionData> {id: language, text: language})
    this.userService.getLanguages().subscribe(data => {
      this.languages = data.map(language => <Select2OptionData> {id: language.language, text: language.language})
    })
  }
}
