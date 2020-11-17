import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUComponent } from './add-edit-u.component';

describe('AddEditUComponent', () => {
  let component: AddEditUComponent;
  let fixture: ComponentFixture<AddEditUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
