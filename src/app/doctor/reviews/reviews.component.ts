import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ReviewsService } from 'src/app//services/reviews.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  doctorName: string;

  constructor(private auth: AuthenticationService, private reviews: ReviewsService) { }
  // review = [];
  review:any;
  ngOnInit(): void {
    this.doctorName = this.auth.userValue.firstName + ' ' + this.auth.userValue.lastName;
    //console.log(this.reviews.get_reviews());
    this.reviews.get_reviews().subscribe((data: any[]) => {
      
      this.review = data['reviewList'];
      console.log('review data',this.review['childReviews']);
    })  



  }

}
