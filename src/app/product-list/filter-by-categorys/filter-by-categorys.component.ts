import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product, ProductCategory } from 'src/app/Shared-model/Product.model';

@Component({
  selector: 'app-filter-by-categorys',
  templateUrl: './filter-by-categorys.component.html',
  styleUrls: ['./filter-by-categorys.component.scss']
})
export class FilterByCategorysComponent implements OnInit {
  @Input()
  public productCategorys!:ProductCategory[];
  
  @Output()
  public CategoryChangedEmitter:EventEmitter<ProductCategory> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  CategoryChanged(CategoryId:number){
    this.CategoryChangedEmitter.emit(this.productCategorys.find(item => item.Id == CategoryId))
  }

}
