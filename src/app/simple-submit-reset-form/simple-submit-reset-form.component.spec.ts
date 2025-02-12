import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSubmitResetFormComponent } from './simple-submit-reset-form.component';

describe('SimpleSubmitResetFormComponent', () => {
  let component: SimpleSubmitResetFormComponent;
  let fixture: ComponentFixture<SimpleSubmitResetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleSubmitResetFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleSubmitResetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
