import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface TableData {
  id: any;
  name: string;
  status: string;
  startDate: string;
  endDate: string;
  result: string;
}

@Injectable({
  providedIn: 'root',
})
export class QtnaireDataService {
  private tableData: TableData[] = [
    {
      id: 1,
      name: 'A1',
      status: '尚未開始',
      startDate: '2025/11/5',
      endDate: '2025/12/1',
      result: '前往',
    },
    {
      id: 2,
      name: 'A2',
      status: '尚未開始',
      startDate: '2025/11/6',
      endDate: '2025/12/2',
      result: '前往',
    },
    {
      id: 3,
      name: 'A3',
      status: '尚未開始',
      startDate: '2025/11/7',
      endDate: '2025/12/3',
      result: '前往',
    },
    {
      id: 4,
      name: 'A4',
      status: '進行中',
      startDate: '2024/11/7',
      endDate: '2025/12/4',
      result: '前往',
    },
    {
      id: 5,
      name: 'A5',
      status: '尚未開始',
      startDate: '2025/11/8',
      endDate: '2025/12/5',
      result: '前往',
    },
    {
      id: 6,
      name: 'A6',
      status: '尚未開始',
      startDate: '2025/11/9',
      endDate: '2025/12/6',
      result: '前往',
    },
    {
      id: 7,
      name: 'A7',
      status: '尚未開始',
      startDate: '2025/11/10',
      endDate: '2025/12/7',
      result: '前往',
    },
    {
      id: 8,
      name: 'A8',
      status: '尚未開始',
      startDate: '2025/11/11',
      endDate: '2025/12/8',
      result: '前往',
    },
    {
      id: 9,
      name: 'A9',
      status: '尚未開始',
      startDate: '2025/11/12',
      endDate: '2025/12/9',
      result: '前往',
    },
    {
      id: 10,
      name: 'B1',
      status: '尚未開始',
      startDate: '2025/11/13',
      endDate: '2025/12/10',
      result: '前往',
    },
    {
      id: 11,
      name: 'B2',
      status: '尚未開始',
      startDate: '2025/11/14',
      endDate: '2025/12/11',
      result: '前往',
    },
    {
      id: 12,
      name: 'B3',
      status: '尚未開始',
      startDate: '2025/11/15',
      endDate: '2025/12/12',
      result: '前往',
    },
    {
      id: 13,
      name: 'B4',
      status: '尚未開始',
      startDate: '2025/11/16',
      endDate: '2025/12/13',
      result: '前往',
    },
    {
      id: 14,
      name: 'B5',
      status: '尚未開始',
      startDate: '2025/11/17',
      endDate: '2025/12/14',
      result: '前往',
    },
    {
      id: 15,
      name: 'B6',
      status: '尚未開始',
      startDate: '2025/11/18',
      endDate: '2025/12/15',
      result: '前往',
    },
  ];

  // 使用 BehaviorSubject 來讓訂閱者取得最新數據
  private tableDataSubject = new BehaviorSubject<TableData[]>(this.tableData);
  tableData$: Observable<TableData[]> = this.tableDataSubject.asObservable();

  constructor() {}

  // 獲取表格數據
  getTableData(): Observable<TableData[]> {
    return this.tableData$;
  }

  // 更新某一行的狀態
  updateStatus(id: number, newStatus: string) {
    this.tableData = this.tableData.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    this.tableDataSubject.next(this.tableData);
  }

  // 新增一筆資料
  addData(newData: TableData) {
    this.tableData.push(newData);
    this.tableDataSubject.next(this.tableData);
  }
}
