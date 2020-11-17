import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFnComponent } from './add-edit-fn.component';

describe('AddEditFnComponent', () => {
  let component: AddEditFnComponent;
  let fixture: ComponentFixture<AddEditFnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
