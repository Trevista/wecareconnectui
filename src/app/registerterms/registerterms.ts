import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CommonServiceService } from '../common-service.service';

import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';
import { Register } from '../models/register';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";  

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-register',
  templateUrl: './registerterms.html',
 
})
export class RegistertermsComponent implements OnInit {
  pdfSrc: any; /*= "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";*/
  public registrationForm: FormGroup;
  public submitted = false;
  modalRef: BsModalRef;
  isPatient = false;
  doctors: any = [];
  patients: any = [];
  reg_type = 'Patient Register';
  doc_patient = 'Are you a Doctor?';
    currentRoute: any;
    generalterms: boolean=false;
    subscriberterms: boolean=false;
  constructor(
    private toastr: ToastrService,
    public commonService: CommonServiceService,
    public authService: AuthenticationService,
    public router: Router,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService, private modalService: BsModalService, private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var parms = this.route.params.subscribe(params => {
      console.log(params);
      this.currentRoute = params['id'];
    })
    
    console.log(this.pdfSrc);
    if (this.currentRoute == "terms") {
      this.generalterms = true;

    }
    else if (this.currentRoute == "subscriberterms") {
      this.subscriberterms = true;

    }
   
  }
  
}
