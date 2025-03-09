import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QtnaireDataService } from '../@services/qtnairedata.service';
import { DateService } from '../@services/date.service';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss'],
  imports: [FormsModule]
})
export class StartpageComponent {
  qtName!: string;
  startDate!: string;
  endDate!: string;
  minDate!: string;
  maxDate!: string;
  endMaxDate!: string;
  tableData: any[] = [];  // 存放表格資料

  constructor(private qtnaireDataService: QtnaireDataService,
              private dateService: DateService,
              private router: Router,
  ) {}

  ngOnInit(): void {
    this.qtnaireDataService.tableData$.subscribe(data => {this.tableData = data;});
    this.minDate = this.dateService.changeDateFormat(new Date());
    this.maxDate = this.dateService.changeDateFormat(this.dateService.addDate(new Date(), 30));
  }

  changeSetDate(){
    this.endMaxDate = this.dateService.changeDateFormat(this.dateService.addDate(new Date(), 60));
  }

  buttonSearch(){
    let backData = {
      qtName: this.qtName,
      startDate: this.startDate,
      endDate: this.endDate
    };
    console.log(backData);

  }

  buttonLogin(){
    this.router.navigateByUrl('login');
  }

}

