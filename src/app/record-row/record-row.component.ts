import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { AppUtility } from '../utility/utility';

@Component({
  selector: 'app-record-row',
  templateUrl: './record-row.component.html',
  styleUrls: ['./record-row.component.css'],
  animations: [
    trigger('drawerAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('200ms', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('200ms', style({ transform: 'translateY(-100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class RecordRowComponent implements OnInit {
  @Input('record') student;
  @Output('deleteData') deleteData = new EventEmitter();
  @Output('editData') editData = new EventEmitter();

  dept: string;
  showDrawer: boolean;

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dept = (this.student['dept'] as string).toLowerCase();
    this.showDrawer = false;
  }

  setSubscript(num: number): string {
    return AppUtility.setSubscript(num);
  }

  navigateTo(): void {
    this.router.navigate([
      'students',
      this.student['dept'],
      this.student['roll'],
      this.student['year'],
    ]);
  }

  delete(): void {
    this.deleteData.emit(this.student);
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditFormComponent, {
      width: '600px',
      data: JSON.parse(JSON.stringify(this.student)),
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.editData.emit({
          newData: JSON.parse(JSON.stringify(result)),
          oldData: this.student,
        });
      }
    });
  }
}
