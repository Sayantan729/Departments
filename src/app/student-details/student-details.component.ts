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
  searching;

  options:AnimationOptions={path:'assets/tryagain.json'};

  constructor(
    private fetchData: DataServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searching=true;
    this.route.paramMap.subscribe((params) => {
      console.log(params);

      this.fetchData.getData().subscribe((response) => {
        response.then((data) => {
          this.searching=false;
          data.forEach((element) => {
            if (
              element['roll'] === params.get('roll') &&
              element['dept'] === params.get('dept') &&
              element['year'] === params.get('year')
            ) {
              this.student = element;
              this.options={
                path:'assets/'+this.student['sex'].toLowerCase()+'.json'
              };
            }
          });
        });
      });
    });
  }

  setSubscript(num: number): string {
    return AppUtility.setSubscript(num);
  }
}
