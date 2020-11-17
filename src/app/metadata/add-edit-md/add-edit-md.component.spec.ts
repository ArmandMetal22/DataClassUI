import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMdComponent } from './add-edit-md.component';

describe('AddEditMdComponent', () => {
  let component: AddEditMdComponent;
  let fixture: ComponentFixture<AddEditMdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
