import { Component, OnInit } from '@angular/core';
import { CostumesService } from 'src/app/services/costumes.service';
import { ICostume } from './components/product-box/product-box.component';


const ROWS_HEIGHT: {[id:number]: number} = { 1: 400, 3: 435, 4: 450 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  costumes: ICostume[] = [];
  /*products: any[] = [ {
      imageUrl: 'https://cdn.shopify.com/s/files/1/1789/1993/products/11_8daf3830-7ba0-4861-b152-f3c513fb486f.jpg?v=1671779070',
      tag: 'Genshin Impact',
      name: 'Layla Cosplay',
      brand: 'UWOWO',
      description: 'Strój zawiera perukę, kostium oraz buty',
      rentalPrice: 100,
      depositPrice: 200,
    },
    {
      imageUrl: 'https://cdn.shopify.com/s/files/1/1789/1993/products/F_2.jpg?v=1673744546',
      tag: 'Genshin Impact',
      name: 'Fishl maid ver.',
      brand: 'UWOWO',
      description: 'Strój zawiera perukę, kostium oraz buty',
      rentalPrice: 100,
      depositPrice: 200,
    },
    {
      imageUrl: 'https://cdn.shopify.com/s/files/1/1789/1993/products/O1CN01ALYqEq1GdSG46gxWn__194730645.jpg_400x400_9c8224fb-41ad-4e62-befa-b8901875c863.jpg?v=1670226321',
      tag: 'League of Legends',
      name: 'Kai\'Sa Star Guardian',
      brand: 'UWOWO',
      description: 'Strój zawiera perukę, kostium oraz buty',
      rentalPrice: 100,
      depositPrice: 200,
    },
    {
      imageUrl: 'https://cdn.shopify.com/s/files/1/1789/1993/products/1_50671e38-0473-4690-aaa9-732cb1a3b1ed.jpg?v=1671704149',
      tag: 'Cyberpunk: Edgerunners',
      name: 'David',
      brand: 'UWOWO',
      description: 'Strój zawiera perukę, kostium oraz buty',
      rentalPrice: 100,
      depositPrice: 200,
    },
    {
      imageUrl: 'https://cdn.shopify.com/s/files/1/1789/1993/products/4_7e2611b1-bf77-4133-830c-235f07cffebf.jpg?v=1653444132',
      tag: 'Spy x Family',
      name: 'Yor Forger',
      brand: 'UWOWO',
      description: 'Strój zawiera perukę, kostium oraz buty',
      rentalPrice: 100,
      depositPrice: 200,
    },
    {
      imageUrl: 'https://cdn.shopify.com/s/files/1/0224/7308/0904/products/01_a5ce54b3-1f92-481d-bd75-885e9659dde2_1024x1024@2x.jpg?v=1671441381',
      tag: 'Genshin Impact',
      name: 'Wanderer',
      brand: 'DokiDokiCos',
      description: 'Strój zawiera perukę, kostium oraz buty',
      rentalPrice: 100,
      depositPrice: 200,
    },
    {
      imageUrl: 'https://cdn.shopify.com/s/files/1/0224/7308/0904/products/01_6e9175f9-7b21-4ab6-86d5-3977814e25c1_1024x1024@2x.jpg?v=1674043673',
      tag: 'Overwatch 2',
      name: 'Kiriko',
      brand: 'DokiDokiCos',
      description: 'Strój zawiera perukę, kostium oraz buty',
      rentalPrice: 100,
      depositPrice: 200,
    },
  ]*/

  constructor(private costumesService: CostumesService) { }

  ngOnInit(): void {
    this.costumesService.getAll().then((costumes) => {
      console.log(costumes);
      this.costumes = costumes;
    });
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

}
