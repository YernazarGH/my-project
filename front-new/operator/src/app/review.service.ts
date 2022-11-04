import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from './review';
import { Tariff } from './tariff';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private BASE_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.BASE_URL}/api/reviews/`);
  }

  postReview(tariffId: number, text: string) {
    const username = localStorage.getItem('username')
    return this.http.post<Review>(`${this.BASE_URL}/api/reviews/`, {
      "username": username,
      "tariff": tariffId,
      "text": text,
    })
  }
}
