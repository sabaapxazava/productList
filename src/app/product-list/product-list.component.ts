import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product, ProductCategory } from 'src/app/Shared-model/Product.model';
import { HttpService } from '../Shared-services/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Output()
  public AllProducts:Product[] = [];
  public AllProductsCategory:ProductCategory[] = [];
  public CategoryChangedEmitter:EventEmitter<Number[]> = new EventEmitter;
  public SelectedCategories:Number[] = [];
  public ProducByCategory:Product[] = [];
  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.http.readProducts().subscribe(Response => this.AllProducts = Response);
    this.http.readCategorys().subscribe(Response => this.AllProductsCategory = Response);
  }
  CategoryChanged(event:Number[]){
    this.SelectedCategories = event;
    this.ProducByCategory = this.AllProducts.filter(item => item.ProductCategory.Id == this.SelectedCategories[this.SelectedCategories.indexOf(item.ProductCategory.Id, 0)])
    console.log(this.AllProducts.filter(item => item.ProductCategory.Id == this.SelectedCategories[this.SelectedCategories.indexOf(item.ProductCategory.Id, 0)]));
  }
}
