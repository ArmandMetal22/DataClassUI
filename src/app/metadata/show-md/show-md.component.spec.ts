import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMdComponent } from './show-md.component';

describe('ShowMdComponent', () => {
  let component: ShowMdComponent;
  let fixture: ComponentFixture<ShowMdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
