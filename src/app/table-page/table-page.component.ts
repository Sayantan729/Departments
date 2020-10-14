import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { ExchangeService } from '../services/exchange.service';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements OnInit {
  @Input('inputData') data;
  @Output('insertData') insertData=new EventEmitter();
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
    //this.exchangeService.setData(this._data);
    this.fetchData.updateData(data).subscribe((response) => {
      response.then((rdata) => {
        if (rdata['Status'] !== 'OK')
          {this._data.splice(this._data.indexOf(data), 1);
            //this.exchangeService.setData(this._data);
          }
          
      });
    });
  }


}
