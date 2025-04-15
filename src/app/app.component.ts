import { Component, signal } from '@angular/core';
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

  
  
  ngOnInit() {
    // this.theme.set("Dark");

    // this.theme.set( this.theme() === 'light' ? 'Dark' : 'light' );

    this.theme.update(currentValue => currentValue === 'light' ? 'dark' : 'light');

    document.body.className = this.theme();
  }
}
