import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css'
})
export class FormControlComponent {
  usernameControl = new FormControl('',[
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10),
    Validators.pattern('^[a-zA-Z0-9]+$') //alpha nimeruc only 
  ]);

  showValue(){
      console.log('value:', this.usernameControl.value);
      console.log('Validation status:' , this.usernameControl.valid);
      console.log(this.usernameControl.errors);
  }

}
