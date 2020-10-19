import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';
import { AppUtility } from '../utility/utility';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  student;
  searching:boolean;

  options:AnimationOptions;

  constructor(
    private fetchData: DataServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.options={path:'assets/animations/loading.json'};
    
    this.searching=true;
    this.route.paramMap.subscribe((params) => {
      console.log(params);

      this.fetchData.getIndividualStudent(params.get('roll'),params.get('year'),params.get('dept')).subscribe((response) => {
        response.then((data) => {
          this.searching=false;
          if(data.status=='OK')
          {
            this.student=data.student;
            this.options={path:'assets/animations/'+this.student.sex.toLowerCase()+'.json'}
          }
          if(!this.student)
          this.options={path:'assets/animations/tryagain.json',loop:-1};

        });
      });
    });
  }

  setSubscript(num: number): string {
    return AppUtility.setSubscript(num);
  }
}
