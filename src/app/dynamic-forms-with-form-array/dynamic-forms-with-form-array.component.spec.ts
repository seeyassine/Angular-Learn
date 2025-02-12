import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormsWithFormArrayComponent } from './dynamic-forms-with-form-array.component';

describe('DynamicFormsWithFormArrayComponent', () => {
  let component: DynamicFormsWithFormArrayComponent;
  let fixture: ComponentFixture<DynamicFormsWithFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormsWithFormArrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicFormsWithFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
