import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { MatDialog } from '@angular/material';
import { CourseCardComponent } from '../course-card/course-card.component';
import { DeleteCourseComponent } from '../delete-course/delete-course.component';
import { CreateCourseComponent } from '../create-course/create-course.component';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {

  public courses = [];
  public currentCourse = null;
  public displayedColumns: string[] = ['code', 'name', 'description', 'capacity', 'show', 'delete'];

  constructor(private adminService: AdminService, public dialog: MatDialog) { }

  ngOnInit() {
    this.showAllCourses();
  }

  showAllCourses() {
    this.adminService.getAllCourses()
      .subscribe((data: any) => this.courses = data);
  }

  public showCourse(id: number) {
    this.adminService.getCourse(id)
      .subscribe((data: any) => {
        this.currentCourse = data;
        this.openCourseCard();
      });
  }

  public openCourseCard() {
    const dialogRef = this.dialog.open(CourseCardComponent, {
      width: '250px',
      data: { course: this.currentCourse }
    });
  }

  public addCourse() {
    const dialogRef = this.dialog.open(CreateCourseComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.adminService.addCourse(result.code, result.name, result.description, result.professor, result.capacity)
        .subscribe((data) => {
          console.log(data);
          this.showAllCourses();
        });
      }
    });
  }

  public deleteCourse(id: number) {
    const dialogRef = this.dialog.open(DeleteCourseComponent, {
      width: '250px',
      data: { courseId: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.adminService.deleteCourse(id)
          .subscribe(() => {
            console.log('DELETED COURSE');
            this.showAllCourses();
          });
      }
    });
  }

}
