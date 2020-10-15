import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUtility } from '../utility/utility';

@Component({
  selector: 'app-record-row',
  templateUrl: './record-row.component.html',
  styleUrls: ['./record-row.component.css']
})
export class RecordRowComponent implements OnInit {
  @Input('record') student;
  dept;

  constructor(private router:Router) { }

  ngOnInit(): void {
    
    this.dept=(this.student['dept'] as string).toLowerCase();
  }

  setSubscript(num:number):string
  {
    return AppUtility.setSubscript(num);

  }

  navigateTo()
  {
    this.router.navigate(['students',this.student['dept'],this.student['roll'],this.student['year']])

  }

}
