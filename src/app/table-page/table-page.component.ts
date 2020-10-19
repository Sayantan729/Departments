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
    this.fetchData.getStudents().subscribe((response) => {
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
    this.fetchData.createStudent(data).subscribe((response) => {
      response.then((rdata) => {
        if (rdata['Status'] !== 'OK')
          {this._data.splice(this._data.indexOf(data), 1);
            //this.exchangeService.setData(this._data);
          }
          
      });
    });
  }

  deleteData(data):void
  {
    let index=this._data.indexOf(data);
    this._data.splice(index, 1);
    //this.exchangeService.setData(this._data);
    this.fetchData.deleteStudent(data).subscribe((response) => {
      response.then((rdata) => {
        if (rdata['Status'] !== 'OK')
          {this._data.splice(index, 0,data);
            //this.exchangeService.setData(this._data);
          }
          
      });
    });
    console.log(data);
    
  }

  editData(data):void
  {
    let index=this._data.indexOf(data.oldData);
    this._data.splice(index,1,data.newData);
    this.fetchData.updateStudent(data.newData).subscribe((response) => {
      response.then((rdata) => {
       
        
        if (rdata['Status'] !== 'OK')
          {this._data.splice(index, 1,data.oldData);
            //this.exchangeService.setData(this._data);
          }
          
      });
    });
  }


}
