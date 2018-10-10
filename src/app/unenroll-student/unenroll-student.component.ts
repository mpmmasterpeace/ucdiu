import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-unenroll-student',
  templateUrl: './unenroll-student.component.html',
  styleUrls: ['./unenroll-student.component.css']
})
export class UnenrollStudentComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<UnenrollStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

}
