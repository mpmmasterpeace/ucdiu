import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateStudentComponent } from '../create-student/create-student.component';

@Component({
  selector: 'app-enroll-student',
  templateUrl: './enroll-student.component.html',
  styleUrls: ['./enroll-student.component.css']
})
export class EnrollStudentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.data = { 'id': '' };
  }
  ngOnInit() {

  }


  cancel() {
    this.dialogRef.close();
  }
}
