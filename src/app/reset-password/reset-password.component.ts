import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public resetpasswordForm: FormGroup;
  token: string;
  OTP:string;
  Id: number;
  isOTPEnabled: boolean;

  constructor(public auth: AuthenticationService,
    private formBuilder: FormBuilder, private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.queryParams.token) {
      this.token = this.route.snapshot.queryParams.token;
      this.Id = this.route.snapshot.queryParams.id;
      this.isOTPEnabled = !(this.Id == null);
    }
    if(this.isOTPEnabled){
      this.resetpasswordForm = this.formBuilder.group({
        password : ['', Validators.required],
        confirmPassword : ['', Validators.required],
        OTP:['', Validators.required],
        Id:[this.Id]
        });
    }
    else {
      this.resetpasswordForm = this.formBuilder.group({
        password : ['', Validators.required],
        confirmPassword : ['', Validators.required],
        });
    }
    
  }

  onSubmit () {
    // Check whether the form is valid
    if (this.resetpasswordForm.valid) {
      let resetPassword: any = this.resetpasswordForm.value;
      resetPassword.token = this.token;
      if(resetPassword.password != resetPassword.confirmPassword){
        this.toastr.error('', 'Password and Confirm Passwords are not same');
        return;
      }
      
      if(this.isOTPEnabled){
        this.auth.resetPasswordWithPhone(resetPassword).subscribe(x => {
          this.toastr.success('', x.message);
          this.router.navigate(['/login-page']);
        }, error => {
          if(error.error.message)
            this.toastr.error('', error.error.message);
          else
            this.toastr.error('', 'Unable to reset Password');
        });
      }
      else {
        this.auth.resetPassword(resetPassword).subscribe(x => {
          this.toastr.success('', x.message);
          this.router.navigate(['/login-page']);
        }, error => {
          if(error.error.message)
            this.toastr.error('', error.error.message);
          else
            this.toastr.error('', 'Unable to reset Password');
        });
      }
      
    }
  }

}
