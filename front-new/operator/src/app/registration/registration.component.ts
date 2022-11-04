import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  username: string = ""
  password: string = ""
  hide: boolean = true
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  register() {
    this.userService.registerNewUser(this.username, this.password).subscribe()
  }

}
