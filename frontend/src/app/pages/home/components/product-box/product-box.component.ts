import { Component, OnInit, Input } from '@angular/core';

export interface Iproduct {
  imageUrl: string
  tag: string
  name: string 
  brand: string
  description: string 
  rentalPrice: number 
  depositPrice: number
}

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  @Input() product: Iproduct = {} as Iproduct;

  constructor() { }

  ngOnInit(): void {
  }

}
