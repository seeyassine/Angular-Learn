import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms-with-form-array',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './dynamic-forms-with-form-array.component.html',
  styleUrl: './dynamic-forms-with-form-array.component.css'
})
export class DynamicFormsWithFormArrayComponent {

  employeeForm: FormGroup;

  constructor(){
    this.employeeForm = new FormGroup({
      employees: new FormArray([]),

    })
  }

  get employees(): FormArray{
    return this.employeeForm.get('employees') as FormArray;
  }


  addEmployee(): void{
      const employeeGroup = new FormGroup({
        name: new FormControl(''),
        job: new FormControl(''),
      });
      this.employees.push(employeeGroup)
  }

  submitForm(){
      console.log(this.employeeForm.value);
  }
  
}
