import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber, Subscription, throwError } from 'rxjs';
import { IProduct } from './product';

import { catchError, filter, map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = 'api/products/products.json';
  private sub!: Subscription;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => console.log(data)),
      map((products: IProduct[]) =>
        products.filter((product) => product.price > 4)
      ),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      tap((data) => console.log(data)),
      map((products: IProduct[]) => products.find((p) => p.productId == id))
    );
  }

  // getSelectedProduct(id: number): Observable<IProduct | undefined>  {
  //   return this.getProducts().pipe(filter(product: =>))

  //   };

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      //Cliend side or network error
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      //backend returned an unsuccessful response code
      // response body not appropriate
      errorMessage = `Serverreturned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
