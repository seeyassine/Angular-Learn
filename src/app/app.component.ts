import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControlComponent } from './form-control/form-control.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { DynamicFormsWithFormArrayComponent } from './dynamic-forms-with-form-array/dynamic-forms-with-form-array.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormControlComponent, FormGroupComponent,DynamicFormsWithFormArrayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-learn';
}
