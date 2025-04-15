import { Component, computed, effect, signal } from '@angular/core';
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

 products = signal([
    { id: 1, name: 'Jacket', price: 100 },
    { id: 2, name: 'hat', price: 200 },
    { id: 3, name: 'phone', price: 300 }
  ]);

  filterName = signal('');

  filteredProducts = computed(() => {
    return this.products().filter(
      product => product.name
      .toLocaleLowerCase().
      includes(this.filterName().toLocaleLowerCase()));
  });

  changeFilterName(event: Event) {
    let newFilterName = (event.target as HTMLInputElement).value;
    this.filterName.set(newFilterName);
  }


}
