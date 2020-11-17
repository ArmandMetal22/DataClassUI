import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFnComponent } from './show-fn.component';

describe('ShowFnComponent', () => {
  let component: ShowFnComponent;
  let fixture: ComponentFixture<ShowFnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
