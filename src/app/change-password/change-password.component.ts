import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public changepasswordForm: FormGroup;
  public submitted = false;
  profile;
  constructor(public auth: AuthenticationService,
    private formBuilder: FormBuilder, private toastr: ToastrService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.getProfile();
    this.changepasswordForm = this.formBuilder.group({
      email : [this.auth.userValue.email, Validators.required],
      oldPassword : ['', Validators.required],
      password : ['', Validators.required],
      confirmPassword : ['', Validators.required],
      });
  }

  getProfile() {
    this.userService.getProfile(this.auth.userValue.id).subscribe(x =>
      this.profile = x
      );
  }

  onSubmit () {
    this.submitted = true;
    // Check whether the form is valid
    if (this.changepasswordForm.valid) {
      this.auth.changePassword(this.changepasswordForm.value).subscribe(x => {
        this.toastr.success('', x.message);
        this.changepasswordForm.reset();
      }, error => {
        this.toastr.error('', 'Unable to Update Password');
      });
    }
  }

}
