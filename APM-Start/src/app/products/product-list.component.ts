import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  // selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product List!';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';
  sub!: Subscription;
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  selectedProductId: number | undefined;

  constructor(private productService: ProductService) {}

  // listFilter: string = 'cart';
  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(
      value,
      this.listFilterByPriceFrom
    );
    console.log('Setter is: ', value);
  }

  private _listFilterByPriceFrom: number = 0;

  get listFilterByPriceFrom(): number {
    return this._listFilterByPriceFrom;
  }

  set listFilterByPriceFrom(price: number) {
    this._listFilterByPriceFrom = price;
    this.filteredProducts = this.performFilter(this.listFilter, price);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        // console.log(products);
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });

    this.filteredProducts = this.products;
    console.log('On init');

    // this.ngOnDestroy();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  performFilter(filterBy: string, price: number): IProduct[] {
    console.log('Lefut a filter');
    filterBy = filterBy.toLowerCase();

    return this.products
      .filter((product: IProduct) =>
        product.productName.toLowerCase().includes(filterBy)
      )
      .filter((product) => product.price > price);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  getProductList(): IProduct[] {
    return this.products;
  }
}
