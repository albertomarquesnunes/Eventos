import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../Util/Constants';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'DateTimeFormat'
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {

  override transform(value: any, args?: any): any {
    return super.transform(value, Constants.DATE_TIME_FMT);
  }

}
