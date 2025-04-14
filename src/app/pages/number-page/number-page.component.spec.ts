import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPAgeComponent } from './number-page.component';

describe('NumberPAgeComponent', () => {
  let component: NumberPAgeComponent;
  let fixture: ComponentFixture<NumberPAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberPAgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberPAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
