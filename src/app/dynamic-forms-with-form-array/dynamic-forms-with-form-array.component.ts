import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormArray, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms-with-form-array',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './dynamic-forms-with-form-array.component.html',
  styleUrl: './dynamic-forms-with-form-array.component.css'
})
export class DynamicFormsWithFormArrayComponent {

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.employeeForm = this.fb.group({
      employees: this.fb.array([]),

    })
  }

   // Getter pour accéder facilement au FormArray
  get employees(): FormArray{
    return this.employeeForm.get('employees') as FormArray;
  }


  addEmployee(): void{
      const employeeGroup = this.fb.group({
        name: ['', Validators.required],
        job: ['', Validators.required]
      });
      this.employees.push(employeeGroup)
  }

  submitForm(){
      console.log(this.employeeForm.value);
  }
  
  removeEmployee(index: number): void {
    this.employees.removeAt(index);
  }
  
}
