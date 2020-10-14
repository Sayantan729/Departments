import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { TablePageComponent } from './table-page/table-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'students',
    component: TablePageComponent,
  },
  { path: 'students/:dept/:roll/:year', component: StudentDetailsComponent },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
