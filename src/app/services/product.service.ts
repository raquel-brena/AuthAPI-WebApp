import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import {
  Inject,
  Injectable,
  PLATFORM_ID,
  afterNextRender,
  afterRender,
} from '@angular/core';
import { Product } from '../models/product';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url: string = 'http://localhost:8080/product';

  isBrowser: boolean = false;

  token: string | null = '';

  constructor(
    private httpClient: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  getProducts(): Observable<Product[]> {
    if (this.isBrowser) {
      this.token = localStorage.getItem('token');
    }
    return this.httpClient
      .get<Product[]>(this.url, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        }),
      })
      .pipe(retry(2), catchError(this.handleError));
  }

  updatedProduct(product: Product): Observable<Product> {
    console.log(product.name);
    if (this.isBrowser) {
      this.token = localStorage.getItem('token');
    }
    return this.httpClient
      .put<Product>(this.url, product, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        }),
      })
      .pipe(retry(2), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof Error) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
