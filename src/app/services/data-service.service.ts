import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private _data = [
    { name: 'Sayantan Barik', dept: 'CSE', roll: 7, year: 4, sex: 'Male' },
    
  ];

  constructor() {}

  getData() {
    return this._data;
  }

  updateData(student)
  {
    this._data.splice(0,0,student);
   
    
  }
}
