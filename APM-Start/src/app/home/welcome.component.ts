import { Component } from '@angular/core';
import { ProductListComponeent } from '../products/product-list.component';
import { ProductService } from '../products/product.service';

@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  public pageTitle = 'Welcome';



}
