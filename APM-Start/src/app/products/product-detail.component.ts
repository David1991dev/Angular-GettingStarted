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
    this.getProduct(id);
  }
  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: (product) => (this.product = product),
      error: (err) => console.log(err),
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
