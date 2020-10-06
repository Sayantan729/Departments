import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private _data = [];

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(
      'https://parkingbooking.000webhostapp.com/getStudents.php'
    );
  }

  updateData(student) {
    return this.http.post('https://parkingbooking.000webhostapp.com/insertStudent.php',JSON.stringify(student));
  }
}
