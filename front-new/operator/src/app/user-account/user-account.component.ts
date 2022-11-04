import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  logged: boolean = false;
  hide = true;
  username: string = '';
  password: string = '';
  userInfo: UserInfo | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if (token){
      this.logged = true;
      this.getUserInfo();
    }
  }

  login() {
    this.userService.login(this.username, this.password).subscribe(result => {
      localStorage.setItem('token', result.token);
      localStorage.setItem('username', this.username);
      this.username = '';
      this.password = '';
      this.logged = true;
      this.getUserInfo();
    })
  }
  logout(){
    localStorage.clear();
    this.logged = false;
  }
  getUserInfo() {
    this.userService.getUserInfo().subscribe(res => {
      this.userInfo = res

    });
  }
}
