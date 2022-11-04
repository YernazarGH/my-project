import { Component, OnInit } from '@angular/core';
import { TariffService } from '../tariff.service';
import { Tariff } from '../tariff';
import { UserService } from '../user.service';
import { UserInfo } from '../user-info';


export interface TariffFilter {
  minutes: number,
  gigabytes: number,
  sms: number,
}

@Component({
  selector: 'app-tariffs',
  templateUrl: './tariffs.component.html',
  styleUrls: ['./tariffs.component.css']
})
export class TariffsComponent implements OnInit {
  tariffs: Tariff[] = []
  bestTariff: Tariff | undefined
  userInfo: UserInfo | undefined

  tariffForm: TariffFilter = {minutes: 0, gigabytes: 0, sms: 0}

  constructor(private tariffService: TariffService, private userService: UserService) { }

  ngOnInit(): void {
    this.getTariffs();
  }

  getTariffs(): void {
    this.tariffService.getTariffs().subscribe(tariffs => {
      this.tariffs = tariffs
      this.getGoodTariff()
    });
  }

  cancel() {
    this.tariffForm = {minutes: 0, gigabytes: 0, sms: 0}
  }

  chooseTariff(tariff: Tariff) {
    this.userService.chooseTariff(tariff).subscribe()
  }

  getDiff(tariff: Tariff) {
    var dif = Math.abs(tariff.gigabytes - this.userInfo!.used_resources.gigabytes) / 100 + Math.abs(tariff.minutes - this.userInfo!.used_resources.minutes) / 60 + Math.abs(tariff.sms - this.userInfo!.used_resources.sms);
    return dif;
  }

  compare(tariff: Tariff, tariff2: Tariff) {
    return this.getDiff(tariff) < this.getDiff(tariff2)
  }

  getGoodTariff(): void {
    this.userService.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo
      this.bestTariff = this.tariffs[0]
      this.tariffs.forEach(tariff => {
        if(this.compare(tariff, this.bestTariff!)) {
          this.bestTariff = tariff
        }
      })
    })
  }
  update() {
    this.userService.updateUserResources(this.tariffForm.minutes, this.tariffForm.gigabytes, this.tariffForm.sms).subscribe();
  }
}
