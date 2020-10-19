import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordsComponent } from './records/records.component';
import { RecordRowComponent } from './record-row/record-row.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { TablePageComponent } from './table-page/table-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EditFormComponent } from './edit-form/edit-form.component';
import { MatDialogModule } from '@angular/material/dialog';

export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent,
    RecordRowComponent,
    FormComponent,
    StudentDetailsComponent,
    TablePageComponent,
    HomepageComponent,
    NotFoundComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LottieModule.forRoot({player:playerFactory}),
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
