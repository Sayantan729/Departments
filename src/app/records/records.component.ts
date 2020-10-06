import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './../services/data-service.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
})
export class RecordsComponent implements OnInit {
  private _data: any[];

  constructor(private fetchData: DataServiceService) {}

  ngOnInit(): void {
    this.fetchData.getData().subscribe(response=>{console.log(response)});
  }

  get data()
  {
    return this._data;
  }
}
