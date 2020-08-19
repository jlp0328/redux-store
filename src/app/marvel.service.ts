import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// This interface will be declared later in the article
import { Product } from './product/product.component';

import { NgRedux } from '@angular-redux/store';
import { InitialState } from './store/reducer';
import { LoadItems } from './store/actions';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  constructor(
    private http: HttpClient,
    private ngRedux: NgRedux<InitialState>,
    private apiKey: '2b0fb4cc'
  ) {}
  getAll() {
    this.http
      .get(
        'http://gateway.marvel.com/v1/public/comics?apikey=f020b09551b5ca8246eadbc4c400014a?hash=jlp0327501596'
      )
      .subscribe((products: Array<Product>) => {
        this.ngRedux.dispatch(LoadItems(products));
      });
  }
}
