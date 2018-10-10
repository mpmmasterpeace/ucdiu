import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AdminService } from '../services/admin.service';
import { EnrollStudentComponent } from '../enroll-student/enroll-student.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UnenrollStudentComponent } from '../unenroll-student/unenroll-student.component';

@Component({
  selector: 'app-admin-single-course',
  templateUrl: './admin-single-course.component.html',
  styleUrls: ['./admin-single-course.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminSingleCourseComponent implements OnInit {
  public courses = [];
  public studentsByCourse = [];
  public currentCourse = null;
  public displayedColumns: string[] = ['code', 'name', 'capacity', 'add-student'];


  constructor(private adminService: AdminService, public dialog: MatDialog) { }

  ngOnInit() {
    this.showAllCourses();
  }

  showAllCourses() {
    this.adminService.getAllCourses()
      .subscribe((data: any) => {
        this.courses = data;
        this.getEnrollments();
      });
  }

  getEnrollment(courseCode: number) {
    this.adminService.getEnrolledStudentsInCourse(courseCode)
      .subscribe((data: any) => {
        this.studentsByCourse[courseCode] = data;
      });
  }

  getEnrollments() {
    this.courses.forEach(course => {
      this.getEnrollment(course.code);
    });
  }

  enrollStudent(courseCode: number) {
    const dialogRef = this.dialog.open(EnrollStudentComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.adminService.enrollStudentInCourse(courseCode, result.id)
          .subscribe((data) => {
            console.log(data);
            this.getEnrollment(courseCode);
          });
      }
    });
  }

  unenrollStudent(courseCode: number, studentId: number) {
    const dialogRef = this.dialog.open(UnenrollStudentComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.adminService.unenrollStudentFromCourse(courseCode, studentId)
          .subscribe((data) => {
            console.log(data);
            this.getEnrollment(courseCode);
          });
      }
    });
  }

}
