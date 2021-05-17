import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { DatePipe } from '@angular/common';
import { FileloaderService } from 'src/app/services/fileloader.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CountriesResponse } from 'src/app/models/countriesresponse';
declare var $: any;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private auth: AuthenticationService, private toastr: ToastrService,
              private userService: UserService, private date: DatePipe,
              private fileService: FileloaderService, private domsanitizer: DomSanitizer) {}

  profileForm: FormGroup;
  educations: FormArray;
  experiences: FormArray;
  awards: FormArray;
  registrations: FormArray;
  memberships: FormArray;
  customPrice = false;
  files: File[] = [];
  profilePic: any = 'assets/img/doctors/doctor-thumb-02.jpg';
  countries: CountriesResponse;
  specialities = [];
  states = [];
  profileSpecializations;
  public selectOptions;

  ngOnInit(): void {
    // Pricing Options Show

    this.profileForm = this.fb.group({
      id: [0, Validators.required],
      profilePic: [''],
      userName: [{value: this.auth.userValue.email, disabled: true}, [Validators.required]],
      userId: [this.auth.userValue.id, [Validators.required]],
      email: [{value: this.auth.userValue.email, disabled: true} , [Validators.required]],
      firstName: [ this.auth.userValue.firstName, [Validators.required]],
      lastName: [this.auth.userValue.lastName, [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern("[0-9]{0-10}")]],
      gender: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      profileDescription: ['', [Validators.required, Validators.minLength(5)]],
      clinicInfo: this.getClinic(),
      contactInfo: this.getContactInfo(),
      services: ['', Validators.required],
      specializations: ['', Validators.required],
      feePerVisit: [null, Validators.required],
      educationBackground : this.fb.array([
        this.getEducationBg()
      ]),
      experience : this.fb.array([
        this.getExperience()
      ]),
      awards : this.fb.array([
        this.getAwards()
      ]),
      memberShips :  this.fb.array([
        this.getMemberships()
      ]),
      registrations : this.fb.array([
        this.getRegistrations()
      ]),
    });

    this.getSpecialities();
    this.getCountries();
    this.selectOptions = {
      multiple: true,
      closeOnSelect: false,
    };
  }

getSpecialities() {
    this.userService.getSpecialities().subscribe(x => {
      this.specialities = x?.specialities;
    });
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

getProfile() {
    this.userService.getProfile(this.auth.userValue.id).subscribe(x => {
      if (x.id !== null){
        this.states =  this.countries.countries.find(a => a.countryCode === x.contactInfo.country)?.states || this.countries.states;
        this.profileSpecializations = x.specializations;
        this.profileForm.patchValue({
          ...x,
          dateOfBirth: this.date.transform(x.dateOfBirth, 'yyyy-MM-dd'),
          services: x.services.split(',').map(a => ({
            id : a,
            value: a
          })),
          specializations: x.specializations.map(z => z.name)
        });

        this.profilePic = x.profilePic;

        for (let i = 1; i < x.registrations.length; i++) {
          const register = <FormArray>this.profileForm.get('registrations');
          const reg = x.registrations[i];
          register.controls.push(
            this.fb.group({
            ...reg
          }));
        }

        for (let i = 1; i < x.educationBackground.length; i++) {
          const edbg = <FormArray>this.profileForm.get('educationBackground');
          const edubg = x.educationBackground[i];
          edbg.controls.push(
            this.fb.group({
              ...edubg          }));
        }

        for (let i = 1; i < x.experience.length; i++) {
          const experience = <FormArray>this.profileForm.get('experience');
          const exp = x.experience[i];
          experience.controls.push(
            this.fb.group({
              ...exp
          }));
        }

        for (let i = 1; i < x.awards.length; i++) {
          const award = <FormArray>this.profileForm.get('awards');
          const awa = x.awards[i];
          award.controls.push(
            this.fb.group({
              ...awa
          }));
        }

        for (let i = 1; i < x.memberShips.length; i++) {
          const membership = <FormArray>this.profileForm.get('memberShips');
          const member = x.memberShips[i];
          membership.controls.push(
            this.fb.group({
              ...member
          }));
        }

        this.customPrice = x.feePerVisit > 0;
        $('#price_custom').checked = true;
        $('#pricing_select input[name="rating_option"]').value = 'custom_price';
      }
    }, (error) => {
      this.states = this.countries.states;
    });
  }

getContactInfo(): FormGroup {
    return this.fb.group({
      addressId: 0,
      address1: ['', [Validators.required]],
      address2: [''],
      city: ['', [Validators.required]],
      state: ['TG'],
      country: ['IND'],
      zip: ['', [Validators.required]],
    });
  }

getEducationBg(): FormGroup{
    return this.fb.group({
      id: 0,
      degree: '',
      institute: '',
      completionYear: ''
    });
  }

getExperience(): FormGroup{
    return this.fb.group({
      id: 0,
      institutionName: '',
      from: '',
      to: '',
      designation: ''
    });
  }

getAwards(): FormGroup{
    return this.fb.group({
      id: 0,
      name: '',
      year: ''
    });
  }

getRegistrations(): FormGroup{
    return this.fb.group({
      id: 0,
      name: '',
      year: ''
    });
  }

getMemberships(): FormGroup{
    return this.fb.group({
      name: ''
    });
  }

getClinic(): FormGroup{
    return this.fb.group({
      id: 0,
      name: '',
      address: ''
    });
  }
onSelect(event) {
    this.files.push(...event.addedFiles);
  }

onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

onNewAdd(item){
    switch (item) {
      case 'education':
        this.educations =  this.profileForm.get('educationBackground') as FormArray;
        this.educations.push(this.getEducationBg());
        break;
      case 'experience':
        this.experiences =  this.profileForm.get('experience') as FormArray;
        this.experiences.push(this.getExperience());
        break;
      case 'award':
        this.awards =  this.profileForm.get('awards') as FormArray;
        this.awards.push(this.getAwards());
        break;
      case 'registration':
        this.registrations =  this.profileForm.get('registrations') as FormArray;
        this.registrations.push(this.getRegistrations());
        break;
      case 'membership':
        this.memberships =  this.profileForm.get('memberShips') as FormArray;
        this.memberships.push(this.getMemberships());
        break;
      default:
        break;
    }
  }

onRowDelete(i, row){
    switch (row) {
      case 'education':
       this.educations =  this.profileForm.get('educationBackground') as FormArray;
       this.educations.removeAt(i);
       break;
      case 'experience':
        this.experiences =  this.profileForm.get('experience') as FormArray;
        this.educations.removeAt(i);
        break;
      case 'award':
        this.awards =  this.profileForm.get('awards') as FormArray;
        this.awards.removeAt(i);
        break;
      case 'registration':
        this.registrations =  this.profileForm.get('registrations') as FormArray;
        this.registrations.removeAt(i);
        break;
      case 'membership':
        this.memberships =  this.profileForm.get('memberShips') as FormArray;
        this.memberships.removeAt(i);
        break;
      default:
        break;
    }
  }

priceChange(event){
    if (event.target.value === 'custom_price' && event.target.checked){
      this.customPrice = true;
    }
    else{
      this.customPrice = false;
    }
    console.log(event);
  }

onSubmit(){
    console.log(this.profileForm.value);
    if (this.profileForm.valid){
      const profileValue = {
        ...this.profileForm.value,
        services: this.profileForm.get('services').value.map(x => x.value).toString(),
        specializations: this.profileForm.get('specializations').value.map(x => ({ name: x, id: 0  }))
      };
      if (profileValue.id > 0){
        this.userService.updateProfile(profileValue).subscribe(x => {
          this.toastr.success('', 'Profile Updated Succesfully');
        }, (error) =>  this.toastr.error(error.title, 'Error Occured while updating Profile'));
      }else{
        this.userService.saveProfile(profileValue).subscribe(x => {
          this.toastr.success('', 'Profile Updated Succesfully');
        }, (error) =>  this.toastr.error(error.title, 'Error Occured while saving Profile'));
      }

    }
    else {
      console.log(this.profileForm.errors);
      //this.toastr.error(this.profileForm.errors.toString(), 'Please Provide required details');
    }
  }

countryChange(event){
  this.states =  this.countries.countries.find(x => x.countryCode === event).states || this.countries.states;
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
        this.profileForm.get('profilePic').patchValue(this.profilePic);
      });
  }

}
