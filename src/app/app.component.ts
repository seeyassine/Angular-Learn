import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from '../product';
import { ProductListComponent } from './product-list/product-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-learn';

 allproducts:Product[] = [
    { id: 1, name: 'Jacket', price: 100 },
    { id: 2, name: 'hat', price: 200 },
    { id: 3, name: 'phone', price: 300 }
  ];



}
