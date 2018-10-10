
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SideNavComponent } from './side-nav.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { tick } from '@angular/core/testing';

describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, RouterTestingModule, NoopAnimationsModule],
      declarations: [SideNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    tick(3000);
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
