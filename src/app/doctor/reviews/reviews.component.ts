import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  doctorName: string;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.doctorName = this.auth.userValue.firstName + ' ' + this.auth.userValue.lastName;

  }

}
