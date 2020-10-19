import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private _data = [];

  constructor(private http: HttpClient) {}

  private getData(url:string):Observable<Promise<any>>
  {
    return from(
      fetch(url, {
        method: 'GET',
      })
    ).pipe(map((response) => response.json()));
  }

  private postData(url:string, data:any): Observable<Promise<any>>
  {
    return from(
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
      })
    ).pipe(map((response) => response.json()));
  }



  getStudents(): Observable<Promise<any>> {
    return this.getData('https://parkingbooking.000webhostapp.com/getStudents.php');
  }

  getIndividualStudent(roll,year,dept): Observable<Promise<any>>
  {
    return this.getData('https://parkingbooking.000webhostapp.com/getStudentIndividual.php?roll='+roll+"&year="+year+"&dept="+dept);
   
  }

  createStudent(student): Observable<Promise<any>> {
    return this.postData('https://parkingbooking.000webhostapp.com/insertStudent.php',student);
    
  }

  deleteStudent(student): Observable<Promise<any>>
  {
    return this.postData('https://parkingbooking.000webhostapp.com/deleteStudent.php',student);
  }

  updateStudent(student)
  {
    return this.postData('https://parkingbooking.000webhostapp.com/updateStudent.php',student);
  }

  

  
}
