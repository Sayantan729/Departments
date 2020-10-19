import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataServiceService } from './../services/data-service.service';
import { ExchangeService } from './../services/exchange.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
})
export class RecordsComponent implements OnInit {
  
  @Input('inputData') newData;
  @Output('deleteData') deleteData=new EventEmitter();
  @Output('editData') editData=new EventEmitter();
  data

  constructor(private fetchData: DataServiceService,private exchangeService:ExchangeService) {}

  ngOnInit(): void {
    
    this.data=this.newData;
    
    
    
  }

  delete(data)
  {
    this.deleteData.emit(data);
  }

  edit(data)
  {
    this.editData.emit(data);
  }

  

  

}
