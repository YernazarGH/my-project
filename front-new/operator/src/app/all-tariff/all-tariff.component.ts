import { Component, OnInit } from '@angular/core';
import { TariffService } from '../tariff.service';
import { Tariff } from '../tariff';
import { UserService } from '../user.service';



export interface TariffFilter {
  minutes: number,
  gigabytes: number,
  sms: number,
}

@Component({
  selector: 'app-all-tariff',
  templateUrl: './all-tariff.component.html',
  styleUrls: ['./all-tariff.component.css']
})
export class AllTariffComponent implements OnInit {
  tariffs: Tariff[] = []


  tariffForm: TariffFilter = {minutes: 0, gigabytes: 0, sms: 0}

  constructor(private tariffService: TariffService, private userService: UserService) { }

  ngOnInit(): void {
    this.getTariffs();
  }

  getTariffs(): void {
    this.tariffService.getTariffs().subscribe(tariffs => {
      this.tariffs = tariffs

    });
  }

  cancel() {
    this.tariffForm = {minutes: 0, gigabytes: 0, sms: 0}
  }



  update() {
    this.userService.updateUserResources(this.tariffForm.minutes, this.tariffForm.gigabytes, this.tariffForm.sms).subscribe();
  }
}
