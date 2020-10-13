import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './services/data-service.service';
import { ExchangeService } from './services/exchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Departments';
  _data = [];
  constructor(
    private fetchData: DataServiceService,
    private exchangeService: ExchangeService
  ) {}

  ngOnInit(): void {
    this.fetchData.getData().subscribe((response) => {
      response.then((data) => {
        this._data.length = 0;
        data.forEach((element) => {
          this._data.push(element);
        });
      });
    });
  }

  updateData(data) {
    this._data.splice(0, 0, data);
    this.fetchData.updateData(data).subscribe((response) => {
      response.then((rdata) => {
        if (rdata['Status'] !== 'OK')
          this._data.splice(this._data.indexOf(data), 1);
      });
    });
  }
}
