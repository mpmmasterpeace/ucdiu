import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.data = {'name': '', 'id': ''};
     }
  ngOnInit() {

  }


  cancel() {
    this.dialogRef.close();
  }

}
