import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.css'
})
export class FormGroupComponent {

  myForm: FormGroup;

  constructor(){
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),                        //formControlName="name" in html 
      email: new FormControl('',[Validators.required, Validators.email]),   //formControlName="email"
      age: new FormControl('',Validators.min(18))                           //formControlName="age"
    });
    }

  submitForm(){
        const userAge = this.myForm.get('age')?.value;
        if(userAge < 18){
          alert('Age must be 18 or older');
          return;
        }else if (this.myForm.valid){
            console.log(this.myForm.value);
        } 
  }

}
