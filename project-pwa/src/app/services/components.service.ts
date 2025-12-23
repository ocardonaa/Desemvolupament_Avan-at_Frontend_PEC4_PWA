import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/component.interface';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  private api = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(this.api + '/' + id);
  }
}
