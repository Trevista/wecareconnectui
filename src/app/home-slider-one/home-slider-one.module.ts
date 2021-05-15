import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSliderOneComponent } from './home-slider-one.component';
import { HomeSliderOneRoutingModule } from './home-slider-one-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeSliderOneComponent],
  imports: [
    CommonModule,
    HomeSliderOneRoutingModule,
    SlickCarouselModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class HomeSliderOneModule { }
