import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBiComponent } from './show-bi.component';

describe('ShowBiComponent', () => {
  let component: ShowBiComponent;
  let fixture: ComponentFixture<ShowBiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
