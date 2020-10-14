import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  data=[];

  _data;

  constructor() {this._data=new BehaviorSubject(this.data); }

  setData(data)
  {
    this._data.next(data);
  }
  
}
