import { Component, computed, input } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products = input.required<Product[]>(); 

  filterProducts = computed(() => {
    return this.products().filter((product) => product.name.toLowerCase().includes(this.searchText().toLowerCase()));
  });

  searchText = input('Jacket'); // signal<string>(''); // signal is a function that creates a signal. It is used to create a reactive variable.
}
