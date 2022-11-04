import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tariff } from './tariff';

@Injectable({
  providedIn: 'root'
})
export class TariffService {
  private BASE_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }

  getTariffs(): Observable<Tariff[]> {
    return this.http.get<Tariff[]>(`${this.BASE_URL}/api/tariffs/`);
  }
}
