import { Component, OnInit, Input } from '@angular/core';

export interface ICostume {
  photo: string
  tag: string
  name: string 
  brand: string
  description: string 
  rentalprice: number 
  depositprice: number
}

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  @Input() costume: ICostume = {} as ICostume;

  constructor() { }

  ngOnInit(): void {
  }

}
