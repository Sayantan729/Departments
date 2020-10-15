import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
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
  options:AnimationOptions={path:"assets/animations/loading.json"};
  searching:boolean;


  constructor(
    private fetchData: DataServiceService,
    private exchangeService: ExchangeService
  ) {}

  ngOnInit(): void {
    this.searching=true;
    this.fetchData.getData().subscribe((response) => {
      response.then((data) => {
        this.searching=false;
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
