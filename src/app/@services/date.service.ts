import { Injectable } from '@angular/core';

@Injectable({  providedIn: 'root',})

export class DateService {

  // 改變日期格式 yyyy-mm-dd
  changeDateFormat(dateData: Date, dateType: string = '-'){
    let year;
    let month;
    let date;
    if (dateData) {
      year = dateData.getFullYear();
      month = dateData.getMonth() + 1;
      if(String(month).length == 1){
        month = '0' + month;
      }
      date = dateData.getDate();
      if (String(date).length == 1) {
        date = '0' + date;
      }
      return year + dateType + month + dateType + date;
    } else {
      return '沒抓到';
    }
  }

  // 加日期 setDate處理跨月份或跨年份
  addDate(dateData: Date, addDate: number){
    dateData.setDate(dateData.getDate() + addDate);
    return dateData;
  }

  // 減日期
  reDate(dateData: Date, rmDate: number){
    dateData.setDate(dateData.getDate() - rmDate);
    return dateData;
  }
}
