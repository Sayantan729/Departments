import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonValidators } from '../form/validators/common.validators';
import { PhoneValidators } from '../form/validators/phone.validators';
import { RollNumValidators } from '../form/validators/rollNum.validators';
import { StudentNameValidators } from '../form/validators/studentName.validators';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  @Output('insertData') insertData=new EventEmitter();

  
  form: FormGroup;
  

  constructor(private dialogRef:MatDialogRef<EditFormComponent>,@Inject(MAT_DIALOG_DATA) private _student) { 
    
  }

  get student()
  {
    return this._student;
  }
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

  get phone()
  {
    return this.form.get('phone');
  }

  get address()
  {
    return this.form.get('address');
  }

  submit() {

    let values = this.form.value;

    
    this.insertData.emit({
      name: values['studentName'],
      dept: values['department'],
      roll: values['rollNum'],
      year: values['year'],
      sex: values['gender'],
      phone:values['phone'],
      address:values['address']
    });
    
    this.clearAll();
  }

  clearAll() {
    this.form.reset();
  }

  cancel()
  {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      studentName: new FormControl(this.student.name, [
        CommonValidators.fieldRequired,
        StudentNameValidators.checkFormat,
      ]),
      rollNum: new FormControl({value:this.student.roll,disabled:true}, [
        CommonValidators.fieldRequired,
        RollNumValidators.checkFormat,
      ]),
      gender: new FormControl(this.student.sex, [CommonValidators.fieldRequired]),
      department: new FormControl({value:this.student.dept,disabled:true}, [CommonValidators.fieldRequired]),
      year: new FormControl({value:this.student.year,disabled:true}, [CommonValidators.fieldRequired]),
      phone:new FormControl(this.student.phone,[CommonValidators.fieldRequired,PhoneValidators.checkFormat]),
      address:new FormControl(this.student.address,[CommonValidators.fieldRequired])
    });
    console.log(this.student);
    
    

  }

}
