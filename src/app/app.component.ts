import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-learn';

  theme = signal('light');

  Label = this.theme();

  constructor() {
    effect(() => {
      this.Label = this.theme();
    })
  }
  
  toggleDarkMode() {
    this.theme.update(currentValue => currentValue === 'light' ? 'dark' : 'light');
  }
}
