import { Pipe, PipeTransform } from '@angular/core';
import { Tariff } from './tariff';

@Pipe({
  name: 'tariffFilter'
})
export class TariffFilterPipe implements PipeTransform {

  checkField(value: any, fieldValue: any) {
    if (fieldValue === 0) {
      return true;
    } 
    return value === fieldValue;
  }

  check(value: Tariff, minutes: number, gigabytes: number, sms: number) {
    if (!this.checkField(value.minutes, minutes*60)) {
      return false;
    }
    if (!this.checkField(value.gigabytes, gigabytes*1024)) {
      return false;
    }
    if (!this.checkField(value.sms, sms)) {
      return false;
    }
    return true;
  }

  transform(value: Tariff[], minutes: number, gigabytes: number, sms: number) {
    console.log(minutes)
    var newList: Tariff[] = []
    for (let tariff of value) {
      if (this.check(tariff, minutes, gigabytes, sms)) {
        newList.push(tariff);
      }
    }
    return newList;
  }

}
