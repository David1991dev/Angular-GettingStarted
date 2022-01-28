import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

//Guard feladata, hogy ha 0-át vagy nem számot írunk be akkor visszanavigáljon a product list page-re
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    //Tartalmazza az információt az utvonalról
    route: ActivatedRouteSnapshot
  ) {
    const id = Number(route.paramMap.get('id'));
    if (id < 1 || isNaN(id)) {
      alert('invalid product id');
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
