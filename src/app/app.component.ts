import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { SimpleSubmitResetFormComponent } from './simple-submit-reset-form/simple-submit-reset-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TemplateDrivenFormsComponent,SimpleSubmitResetFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-learn';
}
