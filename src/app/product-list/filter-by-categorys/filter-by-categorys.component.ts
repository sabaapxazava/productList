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
  public CategoryChangedEmitter:EventEmitter<Number[]> = new EventEmitter;
  public isChecked:boolean[] = [];
  constructor() { }
  public SelectedCategoryIds:Number[] = [];
  ngOnInit(): void {
  }
  CategoryChanged(CategoryId:Number, Selected:boolean){
    if(Selected){
      this.SelectedCategoryIds.push(CategoryId);
    }
    else{
      let index = this.SelectedCategoryIds.indexOf(CategoryId, 0)
      if (index > -1) {
        this.SelectedCategoryIds.splice(index, 1);
     }
    }
    this.CategoryChangedEmitter.emit(this.SelectedCategoryIds)
  }

}
