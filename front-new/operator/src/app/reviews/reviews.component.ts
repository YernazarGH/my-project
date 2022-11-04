import { Component, OnInit } from '@angular/core';
import { Review } from '../review';
import { ReviewService } from '../review.service';
import { Tariff } from '../tariff';
import { TariffService } from '../tariff.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = []
  tariffs: Tariff[] = []
  text: string = ""
  selectedTariff: number = 1

  constructor(private reviewService: ReviewService, private tariffService: TariffService) { }

  ngOnInit(): void {
    this.getReviews()
    this.getTariffs()
  }

  getReviews() {
    this.reviewService.getReviews().subscribe(res => this.reviews=res)
  }

  getTariffs() {
    this.tariffService.getTariffs().subscribe(res => this.tariffs=res)
  }

  send() {
    this.reviewService.postReview(this.selectedTariff, this.text).subscribe()
  }
}
