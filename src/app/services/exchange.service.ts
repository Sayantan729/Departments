import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  data:any[]=[];

  _data:BehaviorSubject<any[]>;

  constructor() {this._data=new BehaviorSubject(this.data); }

  setData(data):void
  {
    this._data.next(data);
  }
  
}
