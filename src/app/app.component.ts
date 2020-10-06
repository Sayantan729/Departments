import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './services/data-service.service';
import { ExchangeService } from './services/exchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Departments';
  _data=[];
  constructor(private fetchData: DataServiceService,private exchangeService:ExchangeService) {
    
  }

  ngOnInit(): void {
    this.fetchData.getData().subscribe(response=>{
      this._data.length=0;
      (response as any[]).forEach((item)=>{this._data.push(item)});
      console.log(response);});
    
  }

  updateData(data)
  {
    this._data.splice(0,0,data);
    this.fetchData.updateData(data).subscribe(response=>{
      if(response['Status']!=='OK')
      this._data.splice(this._data.indexOf(data),1);

    })
   
  }
}
