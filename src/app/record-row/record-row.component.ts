import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    if(num /10!=1 )
    {
      if(num % 10==1)
      return num+" st";
      if(num % 10==2)
      return num+" nd";
      if(num % 10==3)
      return num+" rd";
      return num+" th";
    }
    return num + " th";

  }

  navigateTo()
  {
    this.router.navigate(['students',this.student['dept'],this.student['roll'],this.student['year']])

  }

}
