import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeleteStudentComponent } from './delete-student.component';


describe('DeleteStudentComponent', () => {
  let component: DeleteStudentComponent;
  let fixture: ComponentFixture<DeleteStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteStudentComponent],
      imports: [MatDialogModule, ],
      providers: [{ provide: MatDialogRef, useValue: {} },
      { provide: MAT_DIALOG_DATA, useValue: {} }, ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
