import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatIconModule, MatListModule, MatSidenavModule, MatTableModule, MatToolbarModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';
import { AdminSingleCourseComponent } from './admin-single-course/admin-single-course.component';
import { AdminStudentsComponent } from './admin-students/admin-students.component';
import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';

const appRoutes: Routes = [
  { path: 'admin-courses', component: AdminCoursesComponent },
  { path: 'admin-students', component: AdminStudentsComponent },
  { path: 'admin-single-course', component: AdminSingleCourseComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    AdminCoursesComponent,
    AdminStudentsComponent,
    AdminSingleCourseComponent,
    CourseCardComponent,
    DeleteCourseComponent,
    CreateCourseComponent,
    StudentCardComponent,
    CreateStudentComponent,
    DeleteStudentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  entryComponents: [
    CreateCourseComponent,
    CourseCardComponent,
    DeleteCourseComponent,
    CreateStudentComponent,
    StudentCardComponent,
    DeleteStudentComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
