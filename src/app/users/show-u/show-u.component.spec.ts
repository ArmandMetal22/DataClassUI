import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUComponent } from './show-u.component';

describe('ShowUComponent', () => {
  let component: ShowUComponent;
  let fixture: ComponentFixture<ShowUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
