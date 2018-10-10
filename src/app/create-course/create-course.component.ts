import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<CreateCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.data = {'code': '',
      'name': '', 'description': '', 'professor': '',
    'capacity': ''};
     }
  ngOnInit() {

  }


  cancel() {
    this.dialogRef.close();
  }

}
