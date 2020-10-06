import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonValidators } from './validators/common.validators';
import { StudentNameValidators } from './validators/studentName.validators';
import { RollNumValidators } from './validators/rollNum.validators';
import { DataServiceService } from './../services/data-service.service';
import { ExchangeService } from './../services/exchange.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output('insertData') insertData=new EventEmitter();

  
  form: FormGroup;

  constructor(private exchangeService:ExchangeService) {

    this.form = new FormGroup({
      studentName: new FormControl('', [
        CommonValidators.fieldRequired,
        StudentNameValidators.checkFormat,
      ]),
      rollNum: new FormControl('', [
        CommonValidators.fieldRequired,
        RollNumValidators.checkFormat,
      ]),
      gender: new FormControl('', [CommonValidators.fieldRequired]),
      department: new FormControl('', [CommonValidators.fieldRequired]),
      year: new FormControl('', [CommonValidators.fieldRequired]),
    });
  }

  ngOnInit(): void {}

  get studentName() {
    return this.form.get('studentName');
  }

  get rollNum() {
    return this.form.get('rollNum');
  }

  get gender() {
    return this.form.get('gender');
  }

  get year() {
    return this.form.get('year');
  }

  get department() {
    return this.form.get('department');
  }

  submit() {

    let values = this.form.value;

    
    this.insertData.emit({
      name: values['studentName'],
      dept: values['department'],
      roll: values['rollNum'],
      year: values['year'],
      sex: values['gender'],
    });
    
    this.clearAll();
  }

  clearAll() {
    this.form.reset();
  }
}
