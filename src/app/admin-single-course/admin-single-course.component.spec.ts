import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatTableModule } from '@angular/material';
import { AdminSingleCourseComponent } from './admin-single-course.component';


describe('AdminSingleCourseComponent', () => {
  let component: AdminSingleCourseComponent;
  let fixture: ComponentFixture<AdminSingleCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSingleCourseComponent],
      imports: [MatTableModule,
        HttpClientTestingModule,
        MatDialogModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSingleCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
