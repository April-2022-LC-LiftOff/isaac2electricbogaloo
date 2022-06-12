import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPumpkinsComponent } from './user-pumpkins.component';

describe('UserPumpkinsComponent', () => {
  let component: UserPumpkinsComponent;
  let fixture: ComponentFixture<UserPumpkinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPumpkinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPumpkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
