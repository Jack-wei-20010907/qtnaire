import { QtnaireDataService } from './../@services/qtnairedata.service';
import { Router } from '@angular/router';
import { DateService } from './../@services/date.service';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-adminpage',
  imports: [FormsModule],
  templateUrl: './adminpage.component.html',
  styleUrl: './adminpage.component.scss',
})
export class AdminpageComponent {
  qtName!: string;
  startDate!: string;
  endDate!: string;
  minDate!: string;
  maxDate!: string;
  endMaxDate!: string;
  tableData: any[] = [];  // 存放表格資料
  isAdmin: boolean = true;



  constructor(private dateService: DateService,
              private router: Router,
              private qtnaireDataService: QtnaireDataService) {}

  ngOnInit(): void {
    this.minDate = this.dateService.changeDateFormat(new Date());
    this.maxDate = this.dateService.changeDateFormat(this.dateService.addDate(new Date(), 30));
    this.qtnaireDataService.tableData$.subscribe(data => {this.tableData = data});
    this.qtnaireDataService.tableData$
  }

  changeSetDate() {
    this.endMaxDate = this.dateService.changeDateFormat(this.dateService.addDate(new Date(), 60));
  }

  buttonSearch() {
    let backDate = {
      qtName: this.qtName,
      startDate: this.startDate,
      endDate: this.endDate,
    };
    console.log(backDate);
  }

  buttonLogout() {
    this.router.navigateByUrl('');
  }


}
