import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControlComponent } from './form-control/form-control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-learn';
}
