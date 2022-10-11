import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductCategory } from 'src/app/Shared-model/Product.model';
import { HttpService } from 'src/app/Shared-services/http.service';

@Component({
  selector: 'app-filtered-proucts',
  templateUrl: './filtered-proucts.component.html',
  styleUrls: ['./filtered-proucts.component.scss']
})
export class FilteredProuctsComponent implements OnInit {
  @Input()
  public ProducByCategory:Product[] = [];
  constructor() { }
  ngOnInit(): void {
  }

}
