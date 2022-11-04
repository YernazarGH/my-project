import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInfo } from './user-info';
import { Tariff } from './tariff';
import { TariffFilter } from './tariffs/tariffs.component';

export interface LoginResponse {
  token: string;
}
export interface UserRegistrationResponse{
  id: number;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/auth/`, {
      username,
      password,
    });
  }

  getUserInfo() {
    const username = localStorage.getItem('username')
    return this.http.get<UserInfo>(`${this.BASE_URL}/api/users/${username}/`);
  }

  chooseTariff(tariff: Tariff) {
    const username = localStorage.getItem('username')
    console.log(username)
    return this.http.post<UserInfo>(`${this.BASE_URL}/api/tariffs/${username}/${tariff.id}/`, {});
  }

  registerNewUser(username: string, password: string) {
    return this.http.post<UserRegistrationResponse>(`${this.BASE_URL}/api/users/`, {
      username,
      password,
    })
  }

  updateUserResources(minutes: number, gigabytes: number, sms: number) {

    const username = localStorage.getItem('username')
    return this.http.post<any>(`${this.BASE_URL}/api/users/${username}/${minutes*60}/${gigabytes*1024}/${sms}/`, {
    })
  }
}
