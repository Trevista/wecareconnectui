import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { FileloaderService } from 'src/app/services/fileloader.service';
import { CountriesResponse, State } from 'src/app/models/countriesresponse';
import { Select2OptionData } from 'ng-select2';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private auth: AuthenticationService, private toastr: ToastrService,
              private userService: UserService, private date: DatePipe, private fileService: FileloaderService) { }
  patientprofileForm: FormGroup;
  files: File[] = [];
  profilePic: any = 'assets/img/doctors/doctor-thumb-02.jpg';
  countries: CountriesResponse;
  states: State[];
  statesData: Array<Select2OptionData>;
  formSubmitted: boolean;

  ngOnInit(): void {
    this.patientprofileForm = this.fb.group({
      id: [0, Validators.required],
      profilePic: [''],
      userName: [{ value: this.auth.userValue.email, disabled: true }, [Validators.required]],
      userId: [this.auth.userValue.id, [Validators.required]],
      email: [{ value: this.auth.userValue.email, disabled: true }, [Validators.required]],
      firstName: [{value: this.auth.userValue.firstName, disabled: true}, [Validators.required]],
      lastName: [{value: this.auth.userValue.lastName,disabled: true}, [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      gender: [null],
      dateOfBirth: ['', [Validators.required]],
      profileDescription: [null],
      contactInfo: this.getContactInfo(),
    });
    this.getCountries();
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
      const profileValue = {
        ...this.patientprofileForm.value
      };
      if (profileValue.id > 0) {
        this.userService.updateProfile(profileValue).subscribe(x => {
          this.toastr.success('', 'Profile Updated Succesfully');
        }, (error) => this.toastr.error(error.title, 'Error Occured while updating Profile'));
      } else {
        this.userService.saveProfile(profileValue).subscribe(x => {
          this.toastr.success('', 'Profile Updated Succesfully');
        }, (error) => console.log(error));
      }

    }
    else {
      this.toastr.error(this.patientprofileForm.errors.toString(), 'Please Provide required details');
    }

  }
}
