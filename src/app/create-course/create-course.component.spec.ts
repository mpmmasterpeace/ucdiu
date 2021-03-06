import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MatFormFieldModule, MatInputModule, MAT_DIALOG_DATA } from '@angular/material';
import { CreateCourseComponent } from './create-course.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


describe('CreateCourseComponent', () => {
  let component: CreateCourseComponent;
  let fixture: ComponentFixture<CreateCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCourseComponent],
      imports: [FormsModule, MatFormFieldModule, MatDialogModule, MatInputModule, NoopAnimationsModule],
      providers: [{ provide: MatDialogRef, useValue: {} },
      { provide: MAT_DIALOG_DATA, useValue: {} }, ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
