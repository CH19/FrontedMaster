import { Component } from '@angular/core';
import { product } from '../product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
 prod: product[] = []

}
