import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBiComponent } from './add-edit-bi.component';

describe('AddEditBiComponent', () => {
  let component: AddEditBiComponent;
  let fixture: ComponentFixture<AddEditBiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
