import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = 'http://ec2-18-207-195-178.compute-1.amazonaws.com/school';
  courseUrl = this.baseUrl + '/course/';
  allCoursesUrl = this.courseUrl + 'all';
  addCourseUrl = this.courseUrl + 'add/';

  studentUrl = this.baseUrl + '/student/';
  allStudentsUrl = this.studentUrl + 'all';
  addStudentUrl = this.studentUrl + 'add/';

  constructor(private http: HttpClient) { }

  public getAllCourses() {
    return this.http.get(this.allCoursesUrl);
  }

  public getCourse(id: number) {
    return this.http.get(this.courseUrl + id);
  }

  public addCourse(code: number, name: string, description: string,
    professor: string, capacity: number) {
    return this.http.post(this.addCourseUrl,
      '{"code":' + code + ', "name":"' + name +
      '", "description":"' + description +
      '", "professor":"' + professor +
      '", "capacity":' + capacity + '}', {responseType: 'text'});
  }

  public deleteCourse(id: number) {
    return this.http.delete(this.courseUrl + id, { responseType: 'text' });
  }

  public getAllStudents() {
    return this.http.get(this.allStudentsUrl);
  }

  public getStudent(id: number) {
    return this.http.get(this.studentUrl + id);
  }

  public addStudent(id: number, name: string) {
    return this.http.post(this.addStudentUrl,
      '{"id":' + id + ', "name":"' + name + '"}',
      { responseType: 'text'});
  }

  public deleteStudent(id: number) {
    return this.http.delete(this.studentUrl + id, { responseType: 'text' });
  }
}
