import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { MatDialog } from '@angular/material';
import { StudentCardComponent } from '../student-card/student-card.component';
import { CreateStudentComponent } from '../create-student/create-student.component';
import { DeleteStudentComponent } from '../delete-student/delete-student.component';

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrls: ['./admin-students.component.css']
})
export class AdminStudentsComponent implements OnInit {
  public students = [];
  public currentStudent = null;
  public displayedColumns: string[] = ['id', 'name', 'show', 'delete'];
  constructor(private adminService: AdminService, public dialog: MatDialog) { }

  ngOnInit() {
    this.showAllStudents();
  }

  showAllStudents() {
    this.adminService.getAllStudents()
      .subscribe((data: any) => this.students = data);
  }

  public showStudent(id: number) {
    this.adminService.getStudent(id)
      .subscribe((data: any) => {
        this.currentStudent = data;
        this.openStudentCard();
      });
  }

  public openStudentCard() {
    const dialogRef = this.dialog.open(StudentCardComponent, {
      width: '250px',
      data: { student: this.currentStudent }
    });
  }

  public addStudent() {
    const dialogRef = this.dialog.open(CreateStudentComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.adminService.addStudent(result.id, result.name)
          .subscribe((data) => {
            console.log(data);
            this.showAllStudents();
          });
      }
    });
  }

  public deleteStudent(id: number) {
    const dialogRef = this.dialog.open(DeleteStudentComponent, {
      width: '250px',
      data: { studentId: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.adminService.deleteStudent(id)
          .subscribe((data) => {
            console.log(data);
            this.showAllStudents();
          });
      }
    });
  }


}
