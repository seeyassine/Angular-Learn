import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {

  user:string = '';
  email:string = '';
  selectedCountry: string = '';
  city: string = '';

  countries = [
    {name: 'USA', value:'usa'},
    {name: 'Canada', value:'canada'},
    {name:'UK', value:'uk'}
  ];

  cities: {[key: string]:string[]} = {
    usa: ['New York','Los Angeles','Chicago'],
    canada: ['Toronto', 'Vancouver', 'Montreal'],
    uk: ['London', 'Manchester','Birmingham']
  }

    getCitiesByCountry(country:string): string[]{
      return this.cities[country] || [];
    }
    
  onSubmit(myForm:NgForm){
    if(myForm.valid){
      const formData = {
        user:this.user,
        email: this.email,
        country: this.selectedCountry,
        city: this.city,
      };
      console.log('Form Submitted', formData);
    }else{
      alert('Please fill up the field')
    }
  }

}
