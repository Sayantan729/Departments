import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './services/data-service.service';
import { ExchangeService } from './services/exchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Departments';
  constructor(){}
}
