import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategory } from '../Shared-model/Product.model';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  readProducts():Observable<any[]> {
    let fullApiUrl = `https://europroductcms.azurewebsites.net/api/fetchProducysStepByStep/1/400`;

    return this.http.get<any[]>(fullApiUrl);
  }
  readCategorys():Observable<ProductCategory[]> {
    let fullApiUrl = `https://europroductcms.azurewebsites.net/api/productcategory`;

    return this.http.get<any[]>(fullApiUrl);
  }
}
