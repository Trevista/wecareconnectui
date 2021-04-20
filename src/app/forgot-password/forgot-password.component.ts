import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { NgxSpinnerService } from "ngx-spinner";  
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email = '';

  constructor(private authService: AuthenticationService,
              private spinner: NgxSpinnerService,
              private toastr: ToastrService,
              public router: Router
              ) 
              {
                this.email = ''; 
              }

  ngOnInit(): void {
  }

  forgotPassword(email){
    const params = {
      email
    };
    console.log("PARAMS: ", params);
    console.log("IN Forgot password..");
    if(this.email == null || this.email == ''){
      this.toastr.error("Please provide registered Email");
      return false;
    }
    else{
    this.spinner.show();
    let result = this.authService.forgotpassword(params).subscribe((res) => {
      console.log("Forgot password status: " , result);
      this.spinner.hide();
      // Swal.fire(
      //   'Forget Password',
      //   'A Rest Password link has been sent to your registered email address',
      //   'success',
        
      // )
      Swal.fire({
        title: 'Forget password',
        icon: 'success',
        text: "A Rest Password link has been sent to your registered email address.",
        width: 400
      })
      this.router.navigate(['/login-page']);
    }, (error) => this.toastr.error('Error Occured', 'Please try after sometime!') && this.spinner.hide());
    }
}
}
