import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private _data = [];

  constructor(private http: HttpClient) {}

  getData() {
    return from(
      fetch('https://parkingbooking.000webhostapp.com/getStudents.php', {
        method: 'GET',
      })
    ).pipe(map((response) => response.json()));
  }

  getIndividualData(roll,year,dept)
  {
    return from(
      fetch('https://parkingbooking.000webhostapp.com/getStudentIndividual.php?roll='+roll+"&year="+year+"&dept="+dept, {
        method: 'GET',
      })
    ).pipe(map((response) => response.json()));
  }

  updateData(student) {
    return from(
      fetch('https://parkingbooking.000webhostapp.com/insertStudent.php', {
        method: 'POST',
        body: JSON.stringify(student),
      })
    ).pipe(map((response) => response.json()));
    //return this.http.post('https://parkingbooking.000webhostapp.com/insertStudent.php',JSON.stringify(student));
  }
}
