import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product?: IProduct;
  selectedProduct: IProduct | undefined;
  sub!: Subscription;

  constructor(
    private rout: ActivatedRoute,
    private router: Router,
    private productService: ProductService // private prod: ProductListComponent
  ) {}

  ngOnInit(): void {
    const id: number = Number(this.rout.snapshot.paramMap.get('id'));
    this.pageTitle += `:  ${id}`;
    this.rout.snapshot.paramMap.get('id');

    this.product = this.productService.getSelectedProduct(id);
    console.log('Product is: ' + this.product);

    // this.sub = this.productService.getProducts().subscribe({
    //   next: (products) => {
    //     const selected = products.filter((item) => item['productId'] == id);
    //     console.log('Selected is: ' + selected);
    //     this.product = selected[0];
    //   },
    // });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
