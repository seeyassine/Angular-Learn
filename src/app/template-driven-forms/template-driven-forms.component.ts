import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent {

  user: { username: string} = {username:''}

  submitForm(myForm:NgForm){
        if(myForm.valid){
            alert("Submitted successfully");
            console.log(this.user)
        }
  }
}
