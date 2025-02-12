import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-simple-submit-reset-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './simple-submit-reset-form.component.html',
  styleUrl: './simple-submit-reset-form.component.css'
})
export class SimpleSubmitResetFormComponent {

  formSubmit(myForm: NgForm){
        if(myForm.valid){
          const formValues = JSON.stringify(myForm.value)
          console.log(formValues)
        }else{
          alert("Please fill up the required fields")
        }
  }

  resetValue(myForm: NgForm){
      myForm.resetForm();
  }

  setDefault(myForm: NgForm){
    myForm.resetForm(
      {
        name: 'Default Name',
        email: 'Default@gmail.com'
      }
    );
  }

}
