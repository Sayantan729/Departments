import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student;

  constructor(private fetchData:DataServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      console.log(params);
      

      this.fetchData.getData().subscribe((response) => {
        response.then((data) => {
          
          data.forEach((element) => {
            
            
            if(element['roll']===params.get('roll') && element['dept']===params.get('dept') && element['year']===params.get('year'))
            {
              this.student=element;
            }
            
          });
          
          
          
          
        });
      });

    })
    
  }

}
